import React, { useState, useRef, useEffect, useMemo } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2, Info } from 'lucide-react';

const FloorLayoutViewer = ({
                               layoutData,
                               onRoomSelect = () => {},
                               showGrid = true,
                               zoomEnabled = true,
                               className = "",
                               style = {}
                           }) => {
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [selectedRoomId, setSelectedRoomId] = useState(null);
    const [hoveredRoomId, setHoveredRoomId] = useState(null);
    const [isPanning, setIsPanning] = useState(false);
    const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [showLegend, setShowLegend] = useState(true);

    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    // Parse layout data early to avoid conditional hook calls
    const { floorInfo, roomsData, parsedLayoutData, elements, canvasSize } = useMemo(() => {
        const floor = layoutData?.floor || {};
        const rooms = layoutData?.rooms || [];

        let parsed = null;
        try {
            parsed = typeof floor.layoutData === 'string'
                ? JSON.parse(floor.layoutData)
                : floor.layoutData;
        } catch (e) {
            console.error('Invalid layoutData:', e);
        }

        const els = parsed?.elements || [];
        const size = {
            width: parsed?.canvasWidth || 1200,
            height: parsed?.canvasHeight || 800
        };

        return {
            floorInfo: floor,
            roomsData: rooms,
            parsedLayoutData: parsed,
            elements: els,
            canvasSize: size
        };
    }, [layoutData]);

    // Create a map for quick room lookup by ID
    const roomsMap = useMemo(() => {
        const map = new Map();
        roomsData.forEach(room => {
            map.set(room.id, room);
        });
        return map;
    }, [roomsData]);

    // Calculate room statistics
    const roomStats = useMemo(() => {
        const stats = {
            total: 0,
            available: 0,
            occupied: 0,
            visiting: 0,
            availableBeds: 0
        };

        elements.forEach(element => {
            if (element.type === 'room' && element.roomId) {
                const room = roomsMap.get(element.roomId);
                if (room) {
                    stats.total++;
                    switch (room.status) {
                        case 'AVAILABLE':
                            stats.available++;
                            stats.availableBeds += room.availableBeds || 0;
                            break;
                        case 'OCCUPIED':
                            stats.occupied++;
                            break;
                        case 'VISITING':
                            stats.visiting++;
                            break;
                    }
                }
            }
        });

        return stats;
    }, [elements, roomsMap]);

    // Get element color based on type and status
    const getElementColor = (element) => {
        if (element.type === 'room') {
            const room = roomsMap.get(element.roomId);
            if (!room) return '#9ca3af'; // Gray for rooms without data

            // Status-based colors
            switch (room.status) {
                case 'AVAILABLE':
                    if (selectedRoomId === element.roomId) return '#16a34a'; // Selected green
                    if (hoveredRoomId === element.roomId) return '#22c55e'; // Hover green
                    return '#4ade80'; // Available green
                case 'OCCUPIED':
                    return '#ef4444'; // Red for occupied
                case 'VISITING':
                    return '#f59e0b'; // Orange for visiting
                default:
                    return '#9ca3af'; // Gray for unknown status
            }
        }

        // Non-room element colors
        const colors = {
            lift: '#94a3b8',      // Blue gray
            stairs: '#64748b',    // Darker blue gray
            gallery: '#a78bfa',   // Light purple
            office: '#60a5fa',    // Light blue
            kitchen: '#fbbf24',   // Yellow
            bathroom: '#f472b6',  // Pink
            storage: '#9ca3af'    // Gray
        };
        return colors[element.type] || '#9ca3af';
    };

    // Check if element is clickable
    const isElementClickable = (element) => {
        if (element.type !== 'room') return false;
        const room = roomsMap.get(element.roomId);
        return room && room.status === 'AVAILABLE';
    };

    // Handle room click
    const handleRoomClick = (element) => {
        if (!isElementClickable(element)) return;

        setSelectedRoomId(element.roomId);
        onRoomSelect(element.roomId);
    };

    // Zoom controls
    const handleZoomIn = () => {
        const newZoom = Math.min(zoom * 1.2, 3);
        zoomToCenter(newZoom);
    };

    const handleZoomOut = () => {
        const newZoom = Math.max(zoom / 1.2, 0.5);
        zoomToCenter(newZoom);
    };

    const zoomToCenter = (newZoom) => {
        if (!containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const containerCenterX = container.width / 2;
        const containerCenterY = container.height / 2;

        const currentCanvasCenterX = containerCenterX - pan.x;
        const currentCanvasCenterY = containerCenterY - pan.y;

        const scaleFactor = newZoom / zoom;

        const newPanX = containerCenterX - (currentCanvasCenterX * scaleFactor);
        const newPanY = containerCenterY - (currentCanvasCenterY * scaleFactor);

        setPan({ x: newPanX, y: newPanY });
        setZoom(newZoom);
    };

    const handleResetView = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
        setSelectedRoomId(null);
    };

    const handleFitToScreen = () => {
        if (!containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const padding = 40;
        const scaleX = (container.width - padding) / canvasSize.width;
        const scaleY = (container.height - padding) / canvasSize.height;
        const newZoom = Math.min(scaleX, scaleY, 1);

        setZoom(newZoom);
        setPan({ x: 0, y: 0 });
    };

    // Fullscreen functionality
    const toggleFullscreen = async () => {
        if (!containerRef.current) return;

        try {
            if (!isFullscreen) {
                if (containerRef.current.requestFullscreen) {
                    await containerRef.current.requestFullscreen();
                }
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                }
            }
        } catch (error) {
            console.error('Fullscreen error:', error);
        }
    };

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Pan handling
    const handleMouseDown = (e) => {
        if (!zoomEnabled || e.target.closest('.floor-element')) return;
        setIsPanning(true);
        setLastPanPoint({ x: e.clientX, y: e.clientY });
    };

    const handleMouseMove = (e) => {
        if (!isPanning || !zoomEnabled) return;

        const deltaX = e.clientX - lastPanPoint.x;
        const deltaY = e.clientY - lastPanPoint.y;

        setPan(prev => ({
            x: prev.x + deltaX,
            y: prev.y + deltaY
        }));

        setLastPanPoint({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setIsPanning(false);
    };

    // Touch handling
    const handleTouchStart = (e) => {
        if (!zoomEnabled || e.touches.length !== 1 || e.target.closest('.floor-element')) return;
        setIsPanning(true);
        setLastPanPoint({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        });
    };

    const handleTouchMove = (e) => {
        if (!isPanning || !zoomEnabled || e.touches.length !== 1) return;
        e.preventDefault();

        const deltaX = e.touches[0].clientX - lastPanPoint.x;
        const deltaY = e.touches[0].clientY - lastPanPoint.y;

        setPan(prev => ({
            x: prev.x + deltaX,
            y: prev.y + deltaY
        }));

        setLastPanPoint({
            x: e.touches[0].clientX,
            y: e.touches[0].clientY
        });
    };

    const handleTouchEnd = () => {
        setIsPanning(false);
    };

    // Grid background
    const GridBackground = () => {
        if (!showGrid) return null;

        return (
            <svg
                className="absolute inset-0 pointer-events-none"
                width={canvasSize.width}
                height={canvasSize.height}
                style={{ opacity: 0.15 }}
            >
                <defs>
                    <pattern id="viewer-grid" width="20" height="20" patternUnits="userSpaceOnUse">
                        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                    </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#viewer-grid)" />
            </svg>
        );
    };

    // Element renderer with improved styling
    const ElementRenderer = ({ element }) => {
        const isRoom = element.type === 'room';
        const room = isRoom ? roomsMap.get(element.roomId) : null;
        const isClickable = isElementClickable(element);
        const isSelected = selectedRoomId === element.roomId;
        const isHovered = hoveredRoomId === element.roomId;

        // Get display label
        const getLabel = () => {
            if (element.type === 'room') {
                return element.roomNumber || 'Room';
            }
            // Capitalize first letter of type for other elements
            return element.label || element.type.charAt(0).toUpperCase() + element.type.slice(1);
        };

        return (
            <div
                className={`floor-element absolute flex items-center justify-center text-xs font-bold text-white rounded transition-all ${
                    isClickable
                        ? 'cursor-pointer hover:shadow-lg'
                        : 'cursor-default'
                } ${
                    isSelected ? 'ring-2 ring-white ring-offset-2 ring-offset-green-600' : ''
                }`}
                style={{
                    left: element.x,
                    top: element.y,
                    width: element.width,
                    height: element.height,
                    backgroundColor: getElementColor(element),
                    transform: `rotate(${element.rotation || 0}deg)`,
                    transformOrigin: 'center',
                    border: isSelected ? '2px solid white' : '1px solid rgba(0,0,0,0.2)',
                    zIndex: isSelected || isHovered ? 10 : 1,
                    opacity: isRoom && room?.status !== 'AVAILABLE' ? 0.6 : 1,
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    if (isClickable) handleRoomClick(element);
                }}
                onMouseEnter={() => isRoom && setHoveredRoomId(element.roomId)}
                onMouseLeave={() => setHoveredRoomId(null)}
            >
                <span className="pointer-events-none text-center leading-tight select-none px-1">
                    {getLabel()}
                </span>

                {/* Room status indicator */}
                {isRoom && room && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full border border-white"
                         style={{
                             backgroundColor: room.status === 'AVAILABLE' ? '#22c55e' :
                                 room.status === 'OCCUPIED' ? '#ef4444' :
                                     room.status === 'VISITING' ? '#f59e0b' : '#9ca3af'
                         }}
                    />
                )}

                {/* Available beds indicator for rooms */}
                {isRoom && room && room.status === 'AVAILABLE' && room.availableBeds > 0 && (
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-[10px] px-1 rounded">
                        {room.availableBeds} bed{room.availableBeds > 1 ? 's' : ''}
                    </div>
                )}
            </div>
        );
    };

    // Legend component
    const Legend = () => (
        <div className={`absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 z-20 transition-all ${
            showLegend ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
        }`}>
            <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold">Legend</h3>
                <button
                    onClick={() => setShowLegend(!showLegend)}
                    className="text-gray-400 hover:text-gray-600"
                >
                    <Info size={14} />
                </button>
            </div>
            <div className="space-y-1">
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-green-400 rounded border border-gray-300" />
                    <span className="text-xs">Available Room</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-red-400 rounded border border-gray-300" />
                    <span className="text-xs">Occupied Room</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-orange-400 rounded border border-gray-300" />
                    <span className="text-xs">Visiting Room</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-400 rounded border border-gray-300" />
                    <span className="text-xs">Facilities</span>
                </div>
            </div>
        </div>
    );

    // Room info tooltip (mobile-friendly)
    const RoomTooltip = () => {
        if (!hoveredRoomId || !roomsMap.has(hoveredRoomId)) return null;

        const room = roomsMap.get(hoveredRoomId);
        const element = elements.find(el => el.roomId === hoveredRoomId);
        if (!element) return null;

        return (
            <div
                className="absolute bg-black/90 text-white p-2 rounded-lg text-xs pointer-events-none z-30 min-w-[140px]"
                style={{
                    left: element.x + element.width + 10,
                    top: element.y,
                }}
            >
                <div className="font-semibold mb-1">Room {room.roomNumber}</div>
                <div>Capacity: {room.capacity} beds</div>
                <div>Available: {room.availableBeds} beds</div>
                <div>Status: <span className={`font-medium ${
                    room.status === 'AVAILABLE' ? 'text-green-400' :
                        room.status === 'OCCUPIED' ? 'text-red-400' :
                            room.status === 'VISITING' ? 'text-orange-400' : ''
                }`}>{room.status}</span></div>
                {room.facing && <div>Facing: {room.facing}</div>}
            </div>
        );
    };

    // Global mouse event listeners
    useEffect(() => {
        const handleGlobalMouseMove = (e) => handleMouseMove(e);
        const handleGlobalMouseUp = () => handleMouseUp();

        if (isPanning) {
            document.addEventListener('mousemove', handleGlobalMouseMove);
            document.addEventListener('mouseup', handleGlobalMouseUp);
        }

        return () => {
            document.removeEventListener('mousemove', handleGlobalMouseMove);
            document.removeEventListener('mouseup', handleGlobalMouseUp);
        };
    }, [isPanning, lastPanPoint]);

    // Auto-fit on initial load and resize
    useEffect(() => {
        if (parsedLayoutData) {
            handleFitToScreen();
        }

        const handleResize = () => {
            if (parsedLayoutData) {
                handleFitToScreen();
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [parsedLayoutData]);

    if (!layoutData || !parsedLayoutData) {
        return (
            <div className={`flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 p-8 ${className}`} style={style}>
                <div className="text-center text-gray-500">
                    <Maximize2 size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-lg font-medium">No Layout Data</p>
                    <p className="text-sm">Layout data is not available</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`relative w-full h-full bg-gray-100 rounded-lg overflow-hidden ${className}`}
            style={style}
        >
            {/* Header Stats - Mobile Responsive */}
            <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-2 z-20 hidden sm:block">
                <div className="flex items-center gap-4 text-xs">
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-green-400 rounded" />
                        <span>{roomStats.available} Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <div className="w-3 h-3 bg-red-400 rounded" />
                        <span>{roomStats.occupied} Occupied</span>
                    </div>
                    {roomStats.visiting > 0 && (
                        <div className="flex items-center gap-1">
                            <div className="w-3 h-3 bg-orange-400 rounded" />
                            <span>{roomStats.visiting} Visiting</span>
                        </div>
                    )}
                    <div className="text-gray-600">
                        {roomStats.availableBeds} Beds
                    </div>
                </div>
            </div>

            {/* Zoom Controls */}
            {zoomEnabled && (
                <div className="absolute top-4 right-4 flex flex-col sm:flex-row items-center gap-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-1 z-20">
                    <button
                        onClick={handleZoomOut}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                        disabled={zoom <= 0.5}
                        title="Zoom Out"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <span className="px-2 text-sm font-mono min-w-[3rem] text-center hidden sm:inline">
                        {Math.round(zoom * 100)}%
                    </span>
                    <button
                        onClick={handleZoomIn}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                        disabled={zoom >= 3}
                        title="Zoom In"
                    >
                        <ZoomIn size={18} />
                    </button>
                    <div className="w-px h-6 bg-gray-300 mx-1 hidden sm:block" />
                    <button
                        onClick={handleResetView}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                        title="Reset View"
                    >
                        <RotateCcw size={18} />
                    </button>
                    <button
                        onClick={handleFitToScreen}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                        title="Fit to Screen"
                    >
                        📐
                    </button>
                    <button
                        onClick={toggleFullscreen}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                        title={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
                    >
                        {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
                    </button>
                </div>
            )}

            {/* Canvas Container */}
            <div
                ref={containerRef}
                className="absolute inset-0 overflow-hidden"
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
                style={{ cursor: isPanning ? 'grabbing' : zoomEnabled ? 'grab' : 'default' }}
            >
                {/* Canvas */}
                <div
                    ref={canvasRef}
                    className="relative bg-white border border-gray-300 shadow-xl"
                    style={{
                        width: canvasSize.width,
                        height: canvasSize.height,
                        transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
                        transformOrigin: '0 0',
                        transition: isPanning ? 'none' : 'transform 0.2s ease-out',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        marginLeft: -canvasSize.width / 2,
                        marginTop: -canvasSize.height / 2
                    }}
                    onClick={() => setSelectedRoomId(null)}
                >
                    <GridBackground />

                    {/* Floor Name */}
                    {floorInfo.building && (
                        <div className="absolute top-4 left-4 bg-white/90 px-3 py-1 rounded shadow">
                            <h2 className="font-semibold text-lg">
                                {floorInfo.building.name} - Floor {floorInfo.floorNumber}
                            </h2>
                        </div>
                    )}

                    {/* Render Elements */}
                    {elements.map(element => (
                        <ElementRenderer
                            key={element.id}
                            element={element}
                        />
                    ))}

                    {/* Room Tooltip (Desktop only) */}
                    {!('ontouchstart' in window) && <RoomTooltip />}
                </div>
            </div>

            {/* Legend */}
            <Legend />

            {/* Mobile Room Info */}
            {selectedRoomId && roomsMap.has(selectedRoomId) && (
                <div className="absolute bottom-20 left-4 right-4 sm:hidden bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-3 z-20">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="font-semibold">Room {roomsMap.get(selectedRoomId).roomNumber}</h3>
                            <p className="text-sm text-gray-600">
                                {roomsMap.get(selectedRoomId).availableBeds} beds available
                            </p>
                            <p className="text-xs text-gray-500 mt-1">
                                Status: {roomsMap.get(selectedRoomId).status}
                            </p>
                        </div>
                        <button
                            onClick={() => setSelectedRoomId(null)}
                            className="text-gray-400 hover:text-gray-600"
                        >
                            ✕
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default FloorLayoutViewer;