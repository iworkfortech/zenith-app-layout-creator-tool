import React, { useState, useRef, useEffect } from 'react';
import { ZoomIn, ZoomOut, RotateCcw, Maximize2, Minimize2 } from 'lucide-react';

const FloorLayoutViewer = ({
                               layoutData,
                               onChange = () => {},
                               showGrid = true,
                               zoomEnabled = true,
                               className = "",
                               style = {}
                           }) => {
    const [zoom, setZoom] = useState(1);
    const [pan, setPan] = useState({ x: 0, y: 0 });
    const [selectedElement, setSelectedElement] = useState(null);
    const [isPanning, setIsPanning] = useState(false);
    const [lastPanPoint, setLastPanPoint] = useState({ x: 0, y: 0 });
    const [isFullscreen, setIsFullscreen] = useState(false);

    const containerRef = useRef(null);
    const canvasRef = useRef(null);

    // Parse layout data
    const floorInfo = layoutData?.floor || {};
    const roomsData = layoutData?.rooms || [];

    let parsedLayoutData = null;
    try {
        parsedLayoutData = floorInfo.layoutData ? JSON.parse(floorInfo.layoutData) : null;
    } catch (e) {
        console.error('Invalid layoutData JSON:', e);
    }

    const elements = parsedLayoutData?.elements || [];
    const canvasSize = {
        width: parsedLayoutData?.canvasWidth || 1200,
        height: parsedLayoutData?.canvasHeight || 800
    };

    // Element colors
    const getElementColor = (type) => {
        const colors = {
            room: '#4ade80',
            lift: '#f59e0b',
            stairs: '#ef4444',
            gallery: '#8b5cf6',
            office: '#06b6d4',
            kitchen: '#84cc16',
            bathroom: '#ec4899',
            storage: '#6b7280'
        };
        return colors[type] || '#6b7280';
    };

    // Handle element click
    const handleElementClick = (element) => {
        setSelectedElement(element);

        if (element.type === 'room') {
            // Find the full room object from roomsData
            const fullRoomData = roomsData.find(room => room.roomNumber === element.roomNumber);
            if (fullRoomData) {
                onChange({
                    ...fullRoomData,
                    layoutPosition: { x: element.x, y: element.y },
                    layoutInfo: element
                });
            }
        } else {
            // For non-room elements, return the element itself
            onChange({
                type: element.type,
                label: element.label,
                layoutPosition: { x: element.x, y: element.y },
                layoutInfo: element
            });
        }
    };

    // Zoom controls with proper centering
    const handleZoomIn = () => {
        const newZoom = Math.min(zoom * 1.2, 3);
        zoomToCenter(newZoom);
    };

    const handleZoomOut = () => {
        const newZoom = Math.max(zoom / 1.2, 0.3);
        zoomToCenter(newZoom);
    };

    // Helper function to zoom while keeping content centered
    const zoomToCenter = (newZoom) => {
        if (!containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const containerCenterX = container.width / 2;
        const containerCenterY = container.height / 2;

        // Calculate the current canvas center in screen coordinates
        const currentCanvasCenterX = containerCenterX - pan.x;
        const currentCanvasCenterY = containerCenterY - pan.y;

        // Calculate the scale factor difference
        const scaleFactor = newZoom / zoom;

        // Calculate new pan to keep the center point stable
        const newPanX = containerCenterX - (currentCanvasCenterX * scaleFactor);
        const newPanY = containerCenterY - (currentCanvasCenterY * scaleFactor);

        setPan({ x: newPanX, y: newPanY });
        setZoom(newZoom);
    };

    const handleResetView = () => {
        setZoom(1);
        setPan({ x: 0, y: 0 });
        setSelectedElement(null);
    };

    const handleFitToScreen = () => {
        if (!containerRef.current) return;

        const container = containerRef.current.getBoundingClientRect();
        const padding = 40;
        const scaleX = (container.width - padding) / canvasSize.width;
        const scaleY = (container.height - padding) / canvasSize.height;
        const newZoom = Math.min(scaleX, scaleY, 1);

        setZoom(newZoom);
        setPan({ x: 0, y: 0 }); // Reset pan to center
    };

    // Fullscreen functionality
    const toggleFullscreen = async () => {
        if (!containerRef.current) return;

        try {
            if (!isFullscreen) {
                if (containerRef.current.requestFullscreen) {
                    await containerRef.current.requestFullscreen();
                } else if (containerRef.current.webkitRequestFullscreen) {
                    await containerRef.current.webkitRequestFullscreen();
                } else if (containerRef.current.mozRequestFullScreen) {
                    await containerRef.current.mozRequestFullScreen();
                }
            } else {
                if (document.exitFullscreen) {
                    await document.exitFullscreen();
                } else if (document.webkitExitFullscreen) {
                    await document.webkitExitFullscreen();
                } else if (document.mozCancelFullScreen) {
                    await document.mozCancelFullScreen();
                }
            }
        } catch (error) {
            console.error('Fullscreen error:', error);
        }
    };

    // Listen for fullscreen changes
    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(!!document.fullscreenElement);
        };

        document.addEventListener('fullscreenchange', handleFullscreenChange);
        document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
        document.addEventListener('mozfullscreenchange', handleFullscreenChange);

        return () => {
            document.removeEventListener('fullscreenchange', handleFullscreenChange);
            document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
            document.removeEventListener('mozfullscreenchange', handleFullscreenChange);
        };
    }, []);

    // Pan handling (mouse)
    const handleMouseDown = (e) => {
        if (!zoomEnabled) return;
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

    // Touch handling (mobile)
    const handleTouchStart = (e) => {
        if (!zoomEnabled || e.touches.length !== 1) return;
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

    // Grid background component
    const GridBackground = () => {
        if (!showGrid) return null;

        return (
            <svg
                className="absolute inset-0 pointer-events-none"
                width={canvasSize.width}
                height={canvasSize.height}
                style={{ opacity: 0.3 }}
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

    // Element renderer
    const ElementRenderer = ({ element }) => {
        const isSelected = selectedElement?.id === element.id;

        return (
            <div
                onClick={(e) => {
                    e.stopPropagation();
                    handleElementClick(element);
                }}
                className={`absolute select-none cursor-pointer flex items-center justify-center text-xs font-bold text-white rounded shadow-md transition-all hover:shadow-lg ${
                    isSelected ? 'ring-2 ring-blue-500 ring-offset-1' : 'hover:scale-105'
                }`}
                style={{
                    left: element.x,
                    top: element.y,
                    width: element.width,
                    height: element.height,
                    backgroundColor: getElementColor(element.type),
                    transform: `rotate(${element.rotation || 0}deg)`,
                    transformOrigin: 'center',
                    border: isSelected ? '2px solid #2563eb' : '1px solid #374151',
                    zIndex: isSelected ? 10 : 1,
                }}
            >
        <span className="pointer-events-none text-center leading-tight">
          {element.type === 'room' ? element.roomNumber : element.label?.split(' ')[0]}
        </span>
            </div>
        );
    };

    // Add global mouse event listeners
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

    if (!layoutData || !parsedLayoutData) {
        return (
            <div className={`flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300 ${className}`} style={style}>
                <div className="text-center text-gray-500">
                    <Maximize2 size={48} className="mx-auto mb-2 opacity-50" />
                    <p className="text-lg font-medium">No Layout Data</p>
                    <p className="text-sm">Create a layout using the Layout Builder</p>
                </div>
            </div>
        );
    }

    return (
        <div
            className={`relative w-full h-full bg-gray-100 rounded-lg overflow-hidden ${className}`}
            style={style}
        >
            {/* Zoom Controls - Floating */}
            {zoomEnabled && (
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 p-1 z-20">
                    <button
                        onClick={handleZoomOut}
                        className="p-2 hover:bg-gray-100 rounded transition-colors"
                        disabled={zoom <= 0.3}
                        title="Zoom Out"
                    >
                        <ZoomOut size={18} />
                    </button>
                    <span className="px-2 text-sm font-mono min-w-12 text-center">
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
                    <div className="w-px h-6 bg-gray-300 mx-1" />
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
                    className="relative bg-white border border-gray-300"
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
                    onClick={() => setSelectedElement(null)}
                >
                    <GridBackground />

                    {/* Render Elements */}
                    {elements.map(element => (
                        <ElementRenderer
                            key={element.id}
                            element={element}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// Simple usage example
const FloorLayoutViewerExample = () => {
    const [selectedItem, setSelectedItem] = useState(null);

    const sampleData = {
        floor: {
            id: "floor-1",
            floorNumber: 1,
            building: { name: "Building A" },
            layoutData: JSON.stringify({
                canvasWidth: 1200,
                canvasHeight: 800,
                elements: [
                    { id: "1", type: "room", x: 100, y: 100, width: 60, height: 40, rotation: 0, roomNumber: 12 },
                    { id: "2", type: "room", x: 200, y: 100, width: 60, height: 40, rotation: 0, roomNumber: 13 },
                    { id: "3", type: "lift", x: 300, y: 150, width: 80, height: 60, rotation: 0, label: "Lift" },
                    { id: "4", type: "kitchen", x: 150, y: 200, width: 80, height: 60, rotation: 0, label: "Kitchen" }
                ]
            })
        },
        rooms: [
            { id: "room-1", roomNumber: 12, capacity: 4, status: "AVAILABLE" },
            { id: "room-2", roomNumber: 13, capacity: 2, status: "OCCUPIED" }
        ]
    };

    return (
        <div className="p-4">
            <div style={{ width: '100%', height: '500px' }}>
                <FloorLayoutViewer
                    layoutData={sampleData}
                    onChange={(item) => {
                        setSelectedItem(item);
                        console.log('Selected:', item);
                    }}
                    showGrid={true}
                    zoomEnabled={true}
                />
            </div>

            {selectedItem && (
                <div className="mt-4 p-3 bg-blue-50 rounded">
                    <strong>Selected:</strong> {JSON.stringify(selectedItem, null, 2)}
                </div>
            )}
        </div>
    );
};

export default FloorLayoutViewer;