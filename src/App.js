import React, {useState} from 'react';
import StandaloneLayoutBuilder from './components/StandaloneLayoutBuilder';
import './App.css';
import FloorLayoutViewer from "./components/FloorLayoutViewer";

function App() {


    const [selectedItem, setSelectedItem] = useState(null);

    const sampleData = {
        "floor": {
            "id": "550e8400-e29b-41d4-a716-446655440000",
            "floorNumber": 1,
            "building": {
                "id": "550e8400-e29b-41d4-a716-446655440001",
                "name": "Building A"
            },
            "layoutData": "{\"canvasWidth\":1200,\"canvasHeight\":800,\"version\":\"1.0\",\"elements\":[{\"id\":\"element_1750186602947_0.9273060736293628\",\"type\":\"lift\",\"x\":518,\"y\":197,\"width\":80,\"height\":60,\"rotation\":0,\"label\":\"Lift/Elevator\"},{\"id\":\"element_1750186633413_0.7602563073861793\",\"type\":\"room\",\"x\":425,\"y\":211,\"width\":60,\"height\":40,\"rotation\":0,\"roomNumber\":12,\"roomId\":\"room-1\"}]}"
        },
        "rooms": [
            {
                "id": "room-1",
                "roomNumber": 12,
                "capacity": 4,
                "status": "AVAILABLE"
            },
            {
                "id": "room-2",
                "roomNumber": 13,
                "capacity": 2,
                "status": "AVAILABLE"
            },
            {
                "id": "room-3",
                "roomNumber": 14,
                "capacity": 4,
                "status": "OCCUPIED"
            },
            {
                "id": "room-4",
                "roomNumber": 15,
                "capacity": 3,
                "status": "AVAILABLE"
            },
            {
                "id": "room-5",
                "roomNumber": 16,
                "capacity": 4,
                "status": "AVAILABLE"
            }
        ]
    };

    return (
        <div className="p-4">

            <StandaloneLayoutBuilder />
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
  // return (
  //     <div className="App">
  //       {/*<StandaloneLayoutBuilder />*/}
  //
  //         <FloorLayoutViewer
  //             layoutData={{
  //                 "floor": {
  //                     "id": "550e8400-e29b-41d4-a716-446655440000",
  //                     "floorNumber": 1,
  //                     "building": {
  //                         "id": "550e8400-e29b-41d4-a716-446655440001",
  //                         "name": "Building A"
  //                     },
  //                     "layoutData": "{\"canvasWidth\":1200,\"canvasHeight\":800,\"version\":\"1.0\",\"elements\":[{\"id\":\"element_1750185287409_0.16950547503625235\",\"type\":\"lift\",\"x\":340,\"y\":123,\"width\":80,\"height\":60,\"rotation\":0,\"label\":\"Lift/Elevator\"},{\"id\":\"element_1750185766908_0.6758876264678315\",\"type\":\"room\",\"x\":573,\"y\":167,\"width\":60,\"height\":40,\"rotation\":0,\"roomNumber\":12,\"roomId\":\"room-1\"},{\"id\":\"element_1750185777141_0.8322395474818405\",\"type\":\"room\",\"x\":587,\"y\":285,\"width\":60,\"height\":40,\"rotation\":0,\"roomNumber\":16,\"roomId\":\"room-5\"}]}"
  //                 },
  //                 "rooms": [
  //                     {
  //                         "id": "room-1",
  //                         "roomNumber": 12,
  //                         "capacity": 4,
  //                         "status": "AVAILABLE"
  //                     },
  //                     {
  //                         "id": "room-2",
  //                         "roomNumber": 13,
  //                         "capacity": 2,
  //                         "status": "AVAILABLE"
  //                     },
  //                     {
  //                         "id": "room-3",
  //                         "roomNumber": 14,
  //                         "capacity": 4,
  //                         "status": "OCCUPIED"
  //                     },
  //                     {
  //                         "id": "room-4",
  //                         "roomNumber": 15,
  //                         "capacity": 3,
  //                         "status": "AVAILABLE"
  //                     },
  //                     {
  //                         "id": "room-5",
  //                         "roomNumber": 16,
  //                         "capacity": 4,
  //                         "status": "AVAILABLE"
  //                     }
  //                 ]
  //             }}
  //             onChange={(selectedRoom) => {
  //                 console.log('Room selected:', selectedRoom);
  //                 // Handle room selection
  //             }}
  //             showGrid={true}
  //             zoomEnabled={true}
  //             className="w-full h-96"
  //         />
  //     </div>
  // );
}

export default App;