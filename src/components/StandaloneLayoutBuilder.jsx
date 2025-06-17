import React, { useState, useCallback, useRef, useEffect } from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import {
    Plus, Trash2, RotateCw, Download, Move, ArrowRight, ArrowLeft,
    CheckCircle, AlertCircle, Copy, FileText, Navigation
} from 'lucide-react';

// Draggable Element Component with accurate positioning
const DraggableElement = ({ element, onMove, onSelect, isSelected }) => {
    const [{ isDragging }, drag] = useDrag({
        type: 'element',
        item: {
            id: element.id,
            type: 'element',
            width: element.width,
            height: element.height
        },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        })
    }, [element.id]);

    const getElementColor = () => {
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
        return colors[element.type] || '#6b7280';
    };

    return (
        <div
            ref={drag}
            onClick={(e) => {
                e.stopPropagation();
                onSelect(element);
            }}
            className={`absolute select-none cursor-move flex items-center justify-center text-xs font-bold text-white rounded shadow-lg transition-all ${
                isSelected ? 'ring-2 ring-blue-500 ring-offset-2' : 'hover:shadow-xl'
            }`}
            style={{
                left: element.x,
                top: element.y,
                width: element.width,
                height: element.height,
                backgroundColor: getElementColor(),
                opacity: isDragging ? 0.7 : 1,
                transform: `rotate(${element.rotation}deg)`,
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

// Canvas Drop Zone with Grid Background and Accurate Positioning
const DroppableCanvas = ({ children, canvasSize, onDropElement, onCanvasClick }) => {
    const canvasRef = useRef(null);

    const [, drop] = useDrop({
        accept: 'element',
        drop: (item, monitor) => {
            const clientOffset = monitor.getClientOffset();
            const canvasRect = canvasRef.current?.getBoundingClientRect();

            if (clientOffset && canvasRect) {
                // Calculate exact position relative to canvas
                const x = Math.max(0, Math.min(
                    canvasSize.width - item.width,
                    Math.round(clientOffset.x - canvasRect.left - (item.width / 2))
                ));
                const y = Math.max(0, Math.min(
                    canvasSize.height - item.height,
                    Math.round(clientOffset.y - canvasRect.top - (item.height / 2))
                ));

                onDropElement(item.id, x, y);
            }
        },
    }, [canvasSize, onDropElement]);

    const GridBackground = () => (
        <svg
            className="absolute inset-0 pointer-events-none"
            width={canvasSize.width}
            height={canvasSize.height}
        >
            <defs>
                <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
                </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
    );

    return (
        <div
            ref={(node) => {
                canvasRef.current = node;
                drop(node);
            }}
            className="relative border-2 border-gray-300 bg-white overflow-hidden"
            style={{
                width: canvasSize.width,
                height: canvasSize.height,
                minWidth: canvasSize.width,
                minHeight: canvasSize.height
            }}
            onClick={onCanvasClick}
        >
            <GridBackground />
            {children}
        </div>
    );
};

// Step 1: JSON Input Component
const JsonInputStep = ({ onNext }) => {
    const [jsonInput, setJsonInput] = useState('');
    const [error, setError] = useState('');

    const sampleJson = {
        floor: {
            id: "550e8400-e29b-41d4-a716-446655440000",
            floorNumber: 1,
            building: {
                id: "550e8400-e29b-41d4-a716-446655440001",
                name: "Building A"
            },
            layoutData: null
        },
        rooms: [
            { id: "room-1", roomNumber: 12, capacity: 4, status: "AVAILABLE" },
            { id: "room-2", roomNumber: 13, capacity: 2, status: "AVAILABLE" },
            { id: "room-3", roomNumber: 14, capacity: 4, status: "OCCUPIED" },
            { id: "room-4", roomNumber: 15, capacity: 3, status: "AVAILABLE" },
            { id: "room-5", roomNumber: 16, capacity: 4, status: "AVAILABLE" }
        ]
    };

    const validateAndProceed = () => {
        try {
            const parsed = JSON.parse(jsonInput);

            if (!parsed.floor || !parsed.rooms || !Array.isArray(parsed.rooms)) {
                throw new Error('JSON must contain "floor" object and "rooms" array');
            }

            if (!parsed.floor.floorNumber || !parsed.floor.building?.name) {
                throw new Error('Floor must have floorNumber and building.name');
            }

            if (parsed.rooms.length === 0) {
                throw new Error('Must have at least one room');
            }

            for (const room of parsed.rooms) {
                if (!room.roomNumber || !room.id) {
                    throw new Error('Each room must have roomNumber and id');
                }
            }

            setError('');
            onNext(parsed);
        } catch (err) {
            setError(err.message);
        }
    };

    const loadSampleData = () => {
        setJsonInput(JSON.stringify(sampleJson, null, 2));
        setError('');
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">Step 1: Input Floor Data</h2>
                    <p className="text-gray-600">
                        Paste the JSON data from your API containing floor and rooms information.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center justify-between mb-3">
                            <label className="block text-sm font-medium text-gray-700">
                                Floor + Rooms JSON Data
                            </label>
                            <button
                                onClick={loadSampleData}
                                className="text-sm text-blue-600 hover:text-blue-800"
                            >
                                Load Sample Data
                            </button>
                        </div>
                        <textarea
                            value={jsonInput}
                            onChange={(e) => setJsonInput(e.target.value)}
                            placeholder="Paste your JSON data here..."
                            className="w-full h-96 p-3 border border-gray-300 rounded-lg font-mono text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />

                        {error && (
                            <div className="mt-2 flex items-center gap-2 text-red-600">
                                <AlertCircle size={16} />
                                <span className="text-sm">{error}</span>
                            </div>
                        )}
                    </div>

                    <div>
                        <h3 className="text-sm font-medium text-gray-700 mb-3">Expected JSON Format:</h3>
                        <div className="bg-gray-50 rounded-lg p-4 h-96 overflow-auto">
              <pre className="text-xs text-gray-800">
{JSON.stringify(sampleJson, null, 2)}
              </pre>
                        </div>
                    </div>
                </div>

                <div className="mt-6 flex justify-between items-center">
                    <div className="text-sm text-gray-500">
                        💡 Get this data from your API endpoint
                    </div>
                    <button
                        onClick={validateAndProceed}
                        disabled={!jsonInput.trim()}
                        className="flex items-center gap-2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
                    >
                        Validate & Continue
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
};

// Step 3: Export Results Component
const ExportStep = ({ finalData, onBack, onStartNew }) => {
    const [copied, setCopied] = useState(false);

    const copyToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(JSON.stringify(finalData, null, 2));
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Failed to copy:', err);
        }
    };

    const downloadJson = () => {
        const blob = new Blob([JSON.stringify(finalData, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `floor_${finalData.floor.floorNumber}_with_layout.json`;
        a.click();
        URL.revokeObjectURL(url);
    };

    return (
        <div className="max-w-6xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                        <CheckCircle className="text-green-600" size={24} />
                        <h2 className="text-2xl font-bold text-gray-900">Layout Created Successfully!</h2>
                    </div>
                    <p className="text-gray-600">
                        Your floor layout has been created. The JSON below contains the original data with layoutData added.
                    </p>
                </div>

                <div className="bg-gray-50 rounded-lg p-4 mb-6">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium text-gray-900">Updated JSON (with layoutData)</h3>
                        <div className="flex gap-2">
                            <button
                                onClick={copyToClipboard}
                                className="flex items-center gap-2 text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 transition-colors"
                            >
                                <Copy size={16} />
                                {copied ? 'Copied!' : 'Copy JSON'}
                            </button>
                            <button
                                onClick={downloadJson}
                                className="flex items-center gap-2 text-sm bg-green-600 text-white px-3 py-1 rounded hover:bg-green-700 transition-colors"
                            >
                                <Download size={16} />
                                Download
                            </button>
                        </div>
                    </div>
                    <textarea
                        value={JSON.stringify(finalData, null, 2)}
                        readOnly
                        className="w-full h-64 p-3 bg-white border border-gray-300 rounded font-mono text-xs"
                    />
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                    <h4 className="font-medium text-blue-900 mb-2">What's Updated:</h4>
                    <ul className="list-disc list-inside text-sm text-blue-800 space-y-1">
                        <li>Your original floor and rooms data is preserved</li>
                        <li><strong>floor.layoutData</strong> has been added with the canvas layout</li>
                        <li>Copy this JSON and update your database with the new layoutData</li>
                        <li>Use this data in your FloorLayout.jsx viewer component</li>
                    </ul>
                </div>

                <div className="flex justify-between">
                    <button
                        onClick={onBack}
                        className="flex items-center gap-2 border border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Back to Edit
                    </button>
                    <button
                        onClick={onStartNew}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Create New Layout
                    </button>
                </div>
            </div>
        </div>
    );
};

// Main Layout Builder Component
const StandaloneLayoutBuilder = () => {
    const [currentStep, setCurrentStep] = useState(1);
    const [inputData, setInputData] = useState(null);
    const [elements, setElements] = useState([]);
    const [selectedElement, setSelectedElement] = useState(null);
    const [showAddMenu, setShowAddMenu] = useState(false);
    const [elementType, setElementType] = useState('');
    const [finalExportData, setFinalExportData] = useState(null);

    const canvasSize = { width: 1200, height: 800 };

    const elementTypes = [
        { value: 'room', label: 'Room', color: '#4ade80' },
        { value: 'lift', label: 'Lift/Elevator', color: '#f59e0b' },
        { value: 'stairs', label: 'Stairs', color: '#ef4444' },
        { value: 'gallery', label: 'Gallery/Corridor', color: '#8b5cf6' },
        { value: 'office', label: 'Office', color: '#06b6d4' },
        { value: 'kitchen', label: 'Kitchen', color: '#84cc16' },
        { value: 'bathroom', label: 'Bathroom', color: '#ec4899' },
        { value: 'storage', label: 'Storage', color: '#6b7280' }
    ];

    // Step 1 -> Step 2
    const handleInputNext = (data) => {
        setInputData(data);
        setCurrentStep(2);

        // Initialize elements from existing layoutData if present
        if (data.floor.layoutData) {
            try {
                const layoutData = JSON.parse(data.floor.layoutData);
                if (layoutData.elements) {
                    setElements(layoutData.elements.map(el => ({
                        ...el,
                        id: el.id || `element_${Date.now()}_${Math.random()}`
                    })));
                }
            } catch (e) {
                console.log('No existing layout data');
            }
        }
    };

    // Step 2 -> Step 3
    const handleExportLayout = () => {
        const layoutData = {
            canvasWidth: canvasSize.width,
            canvasHeight: canvasSize.height,
            version: "1.0",
            elements: elements.map(el => ({
                id: el.id,
                type: el.type,
                x: el.x,
                y: el.y,
                width: el.width,
                height: el.height,
                rotation: el.rotation,
                ...(el.type === 'room' && {
                    roomNumber: el.roomNumber,
                    roomId: el.roomId
                }),
                ...(el.type !== 'room' && {
                    label: el.label
                })
            }))
        };

        const finalData = {
            ...inputData,
            floor: {
                ...inputData.floor,
                layoutData: JSON.stringify(layoutData)
            }
        };

        setFinalExportData(finalData);
        setCurrentStep(3);
    };

    // Get available rooms
    const getAvailableRooms = () => {
        if (!inputData?.rooms) return [];
        const usedRoomNumbers = elements
            .filter(el => el.type === 'room')
            .map(el => el.roomNumber);
        return inputData.rooms.filter(room => !usedRoomNumbers.includes(room.roomNumber));
    };

    // Add element
    const addElement = (type, roomData = null) => {
        const newElement = {
            id: `element_${Date.now()}_${Math.random()}`,
            type,
            x: 100,
            y: 100,
            width: type === 'room' ? 60 : 80,
            height: type === 'room' ? 40 : 60,
            rotation: 0,
            ...(type === 'room' && roomData && {
                roomNumber: roomData.roomNumber,
                roomId: roomData.id,
                capacity: roomData.capacity
            }),
            ...(type !== 'room' && {
                label: elementTypes.find(et => et.value === type)?.label || type
            })
        };

        setElements(prev => [...prev, newElement]);
        setShowAddMenu(false);
        setElementType('');
    };

    // Move element with precise positioning
    const moveElement = useCallback((id, x, y) => {
        setElements(prev => prev.map(el =>
            el.id === id ? { ...el, x: Math.round(x), y: Math.round(y) } : el
        ));
    }, []);

    // Keyboard controls for pixel-perfect positioning
    const handleKeyDown = useCallback((e) => {
        if (!selectedElement) return;

        // Prevent default browser behavior for arrow keys
        if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
            e.preventDefault();

            const moveDistance = e.shiftKey ? 10 : 1; // 10px with Shift, 1px without
            const element = elements.find(el => el.id === selectedElement.id);
            if (!element) return;

            let newX = element.x;
            let newY = element.y;

            switch (e.key) {
                case 'ArrowUp':
                    newY = Math.max(0, element.y - moveDistance);
                    break;
                case 'ArrowDown':
                    newY = Math.min(canvasSize.height - element.height, element.y + moveDistance);
                    break;
                case 'ArrowLeft':
                    newX = Math.max(0, element.x - moveDistance);
                    break;
                case 'ArrowRight':
                    newX = Math.min(canvasSize.width - element.width, element.x + moveDistance);
                    break;
            }

            moveElement(element.id, newX, newY);

            // Update selected element reference
            setSelectedElement(prev => prev ? { ...prev, x: newX, y: newY } : null);
        }
    }, [selectedElement, elements, canvasSize, moveElement]);

    // Handle canvas click to deselect elements
    const handleCanvasClick = (e) => {
        // Only deselect if clicking on the canvas itself, not on an element
        if (e.target === e.currentTarget) {
            setSelectedElement(null);
        }
    };

    // Add/remove keyboard event listeners
    useEffect(() => {
        if (selectedElement) {
            document.addEventListener('keydown', handleKeyDown);
            return () => {
                document.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [selectedElement, handleKeyDown]);

    // Delete element
    const deleteElement = (elementId) => {
        setElements(prev => prev.filter(el => el.id !== elementId));
        setSelectedElement(null);
    };

    // Rotate element
    const rotateElement = (elementId) => {
        setElements(prev => prev.map(el =>
            el.id === elementId
                ? { ...el, rotation: (el.rotation + 90) % 360 }
                : el
        ));
    };

    // Start new layout
    const startNew = () => {
        setCurrentStep(1);
        setInputData(null);
        setElements([]);
        setSelectedElement(null);
        setShowAddMenu(false);
        setElementType('');
        setFinalExportData(null);
    };

    // Render current step
    const renderCurrentStep = () => {
        switch (currentStep) {
            case 1:
                return <JsonInputStep onNext={handleInputNext} />;

            case 2:
                return (
                    <DndProvider backend={HTML5Backend}>
                        <div className="w-full h-screen bg-gray-50 flex flex-col">
                            {/* Header */}
                            <div className="bg-white shadow-sm border-b p-4">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <h1 className="text-2xl font-bold text-gray-900">Step 2: Design Layout</h1>
                                        <p className="text-gray-600">
                                            {inputData?.floor?.building?.name} - Floor {inputData?.floor?.floorNumber}
                                        </p>
                                    </div>
                                    <div className="flex gap-3">
                                        <button
                                            onClick={() => setCurrentStep(1)}
                                            className="flex items-center gap-2 border border-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            <ArrowLeft size={20} />
                                            Back
                                        </button>
                                        <button
                                            onClick={() => setShowAddMenu(!showAddMenu)}
                                            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                                        >
                                            <Plus size={20} />
                                            Add Element
                                        </button>
                                        <button
                                            onClick={handleExportLayout}
                                            className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                                        >
                                            <FileText size={20} />
                                            Export Layout
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="flex flex-1 overflow-hidden">
                                {/* Sidebar */}
                                <div className="w-80 bg-white border-r p-4 overflow-y-auto">
                                    <div className="space-y-4">
                                        {/* Add Element Menu */}
                                        {showAddMenu && (
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                                <h3 className="font-semibold mb-3">Add Element</h3>
                                                <select
                                                    value={elementType}
                                                    onChange={(e) => setElementType(e.target.value)}
                                                    className="w-full p-2 border rounded-lg mb-3"
                                                >
                                                    <option value="">Select element type...</option>
                                                    {elementTypes.map(type => (
                                                        <option key={type.value} value={type.value}>
                                                            {type.label}
                                                        </option>
                                                    ))}
                                                </select>

                                                {elementType === 'room' && (
                                                    <div className="space-y-2">
                                                        <h4 className="font-medium">Available Rooms:</h4>
                                                        <div className="max-h-40 overflow-y-auto space-y-2">
                                                            {getAvailableRooms().map(room => (
                                                                <button
                                                                    key={room.id}
                                                                    onClick={() => addElement('room', room)}
                                                                    className="w-full text-left p-2 bg-white border rounded hover:bg-gray-50 transition-colors"
                                                                >
                                                                    Room {room.roomNumber} (Capacity: {room.capacity})
                                                                </button>
                                                            ))}
                                                        </div>
                                                        {getAvailableRooms().length === 0 && (
                                                            <p className="text-gray-500 text-sm">All rooms added to layout</p>
                                                        )}
                                                    </div>
                                                )}

                                                {elementType && elementType !== 'room' && (
                                                    <button
                                                        onClick={() => addElement(elementType)}
                                                        className="w-full bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition-colors"
                                                    >
                                                        Add {elementTypes.find(et => et.value === elementType)?.label}
                                                    </button>
                                                )}
                                            </div>
                                        )}

                                        {/* Elements List */}
                                        <div>
                                            <h3 className="font-semibold mb-3">
                                                Layout Elements ({elements.length})
                                            </h3>
                                            <div className="space-y-2">
                                                {elements.map(element => (
                                                    <div
                                                        key={element.id}
                                                        className={`p-3 border rounded-lg cursor-pointer transition-colors ${
                                                            selectedElement?.id === element.id
                                                                ? 'border-blue-500 bg-blue-50'
                                                                : 'border-gray-200 hover:border-gray-300'
                                                        }`}
                                                        onClick={() => setSelectedElement(element)}
                                                    >
                                                        <div className="flex items-center justify-between">
                                                            <div className="flex-1">
                                                                <div className="flex items-center gap-2">
                                                                    <div
                                                                        className="w-4 h-4 rounded"
                                                                        style={{
                                                                            backgroundColor: elementTypes.find(et => et.value === element.type)?.color || '#6b7280'
                                                                        }}
                                                                    />
                                                                    <span className="font-medium">
                                    {element.type === 'room'
                                        ? `Room ${element.roomNumber}`
                                        : element.label
                                    }
                                  </span>
                                                                </div>
                                                                <p className="text-xs text-gray-500 mt-1">
                                                                    Position: ({element.x}, {element.y})
                                                                    {selectedElement?.id === element.id && (
                                                                        <span className="ml-2 text-blue-600 font-medium">← Use arrow keys</span>
                                                                    )}
                                                                </p>
                                                            </div>
                                                            <div className="flex gap-1">
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        rotateElement(element.id);
                                                                    }}
                                                                    className="p-1 text-gray-400 hover:text-blue-600 transition-colors"
                                                                    title="Rotate 90°"
                                                                >
                                                                    <RotateCw size={14} />
                                                                </button>
                                                                <button
                                                                    onClick={(e) => {
                                                                        e.stopPropagation();
                                                                        deleteElement(element.id);
                                                                    }}
                                                                    className="p-1 text-gray-400 hover:text-red-600 transition-colors"
                                                                    title="Delete"
                                                                >
                                                                    <Trash2 size={14} />
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ))}
                                                {elements.length === 0 && (
                                                    <div className="text-center py-8 text-gray-500">
                                                        <Move size={48} className="mx-auto mb-2 opacity-50" />
                                                        <p>No elements added yet</p>
                                                        <p className="text-sm">Click "Add Element" to start</p>
                                                    </div>
                                                )}
                                            </div>
                                        </div>

                                        {/* Instructions */}
                                        <div className="bg-gray-50 p-3 rounded-lg text-sm text-gray-600">
                                            <h4 className="font-medium mb-2">Instructions:</h4>
                                            <ul className="space-y-1">
                                                <li>• Add rooms and facilities using the dropdown</li>
                                                <li>• Drag elements to position them roughly</li>
                                                <li>• Click elements to select them</li>
                                                <li>• Use <strong>arrow keys</strong> for pixel-perfect positioning</li>
                                                <li>• Hold <strong>Shift + arrows</strong> for 10px movements</li>
                                                <li>• Use rotate/delete buttons in the sidebar</li>
                                                <li>• Export when layout is complete</li>
                                            </ul>
                                        </div>

                                        {/* Keyboard Controls Guide */}
                                        {selectedElement && (
                                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 text-sm">
                                                <div className="flex items-center gap-2 mb-2">
                                                    <Navigation size={16} className="text-blue-600" />
                                                    <h4 className="font-medium text-blue-900">Keyboard Controls Active</h4>
                                                </div>
                                                <div className="text-blue-800 space-y-1">
                                                    <div>🎯 <strong>{selectedElement.type === 'room' ? `Room ${selectedElement.roomNumber}` : selectedElement.label}</strong> selected</div>
                                                    <div>↑↓←→ = 1px movement</div>
                                                    <div>Shift + ↑↓←→ = 10px movement</div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Canvas Area */}
                                <div className="flex-1 bg-gray-100 p-4">
                                    <div className="bg-white rounded-lg shadow-sm h-full overflow-auto">
                                        <DroppableCanvas
                                            canvasSize={canvasSize}
                                            onDropElement={moveElement}
                                            onCanvasClick={handleCanvasClick}
                                        >
                                            {elements.map(element => (
                                                <DraggableElement
                                                    key={element.id}
                                                    element={element}
                                                    onMove={moveElement}
                                                    onSelect={setSelectedElement}
                                                    isSelected={selectedElement?.id === element.id}
                                                />
                                            ))}
                                        </DroppableCanvas>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </DndProvider>
                );

            case 3:
                return (
                    <ExportStep
                        finalData={finalExportData}
                        onBack={() => setCurrentStep(2)}
                        onStartNew={startNew}
                    />
                );

            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {renderCurrentStep()}
        </div>
    );
};

export default StandaloneLayoutBuilder;