import React, {useState} from 'react';
import './App.css';
import FloorLayoutViewer from "./components/FloorLayoutViewer";

function App() {

    const [selectedRoomId, setSelectedRoomId] = useState(null);

    // Sample data with your structure
    const sampleData = {
        "floor": {
            "id": "692250ce-932e-42bf-bf61-09b47b11545d",
            "floorNumber": 0,
            "building": {
                "id": "2cefcc01-0cc5-4361-bec7-7574bf04546f",
                "name": "Building 1",
                "address": "This is First Building "
            },
            "layoutData": {
                "version": "1.0",
                "elements": [
                    {
                        "x": 622,
                        "y": 315,
                        "id": "element_1750273623068_0.6652520404654634",
                        "type": "office",
                        "label": "Office",
                        "width": 80,
                        "height": 60,
                        "rotation": 90
                    },
                    {
                        "x": 624,
                        "y": 248,
                        "id": "element_1750273628229_0.14543458981638302",
                        "type": "room",
                        "width": 60,
                        "height": 40,
                        "roomId": "e913383a-afc2-437b-9712-6ae863781254",
                        "rotation": 0,
                        "roomNumber": 101
                    },
                    {
                        "x": 800,
                        "y": 202,
                        "id": "element_1750273638199_0.6674522336846231",
                        "type": "bathroom",
                        "label": "Bathroom",
                        "width": 80,
                        "height": 60,
                        "rotation": 0
                    }
                ],
                "canvasWidth": 1200,
                "canvasHeight": 800
            },
            "images": [
                "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/19353bb8-4c8d-4f4c-9666-d4dfbf8cf21a-floor2.jpeg",
                "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/7fbe4840-27d6-4bea-b24a-74859b31a445-floor1.jpeg"
            ]
        },
        "rooms": [
            {
                "id": "e913383a-afc2-437b-9712-6ae863781254",
                "roomNumber": 101,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 1
            },
            {
                "id": "19df7483-b728-418b-bb1c-a3e495350ad7",
                "roomNumber": 102,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "8fa653c2-fec7-4ae8-8db4-496c8495eab5",
                "roomNumber": 103,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "c4c9af40-6f8d-4c1d-934a-a5c494a12e6b",
                "roomNumber": 104,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "c0a939f7-415b-4b48-b181-ec9eb7c5f890",
                "roomNumber": 105,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "a3fac1f9-e3ba-4529-8580-862e49101453",
                "roomNumber": 106,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "add8b40b-96a8-4957-9e13-1eece5466d17",
                "roomNumber": 107,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "de90ad60-cb22-4c38-8067-a38a0cb32f50",
                "roomNumber": 108,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "d3b341b9-bc22-4c4e-950a-fdfd727a0e75",
                "roomNumber": 109,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "82a940ca-a0e8-4eaa-b512-a55ac386d9a9",
                "roomNumber": 110,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "8fe48d76-1c71-4413-999f-1bed95abadf8",
                "roomNumber": 111,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "f60c7ae5-9ced-44ab-a867-f799b6c4f9cb",
                "roomNumber": 112,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "ed760b8f-f132-4114-9587-7bfacaeaf1ab",
                "roomNumber": 113,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "cf52feaf-16c1-4dfa-86c1-d1257c8a3fa5",
                "roomNumber": 114,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "6c6e391a-5a34-489b-ae5a-128569b43ec0",
                "roomNumber": 115,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "d7af407d-dbcc-46ae-8acc-4a34009f8b73",
                "roomNumber": 116,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "1645b4f3-1a64-4893-bb69-1e9e7fa93df3",
                "roomNumber": 117,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "fe87921e-d9d8-45fa-89c0-2c2aa498ad60",
                "roomNumber": 118,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "f16e045f-0474-4aaa-8ec7-6486a14eb187",
                "roomNumber": 119,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "61b66942-6345-4915-8dec-cfd1391e0ee3",
                "roomNumber": 120,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "707fc1a1-88b9-45d7-bfcc-7b8b52b45f6a",
                "roomNumber": 121,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "9574e9b0-b4a0-4d2c-8dd1-d103082359a0",
                "roomNumber": 122,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "e02dc052-9333-444d-9b26-764df33a4ce9",
                "roomNumber": 123,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "13ae7d3e-4d33-4b94-b557-515b0fb6e45a",
                "roomNumber": 124,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "84aabcbc-5774-44d3-87e3-f544f802849a",
                "roomNumber": 125,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "bcf9e9de-37c7-45c0-ac34-b2dee380ed45",
                "roomNumber": 126,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "db9c21b1-aeca-4ef1-a630-c375f968a625",
                "roomNumber": 127,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "9f03c7c9-1938-4fc7-8cfa-a7c3ac0a1136",
                "roomNumber": 128,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "904da275-5ad0-42b4-ac67-d7608c630d68",
                "roomNumber": 129,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "302f08bf-4ec2-4aa8-b9d5-156db314fcfd",
                "roomNumber": 130,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "da08d3e6-1c35-4722-a11a-f195f64ba864",
                "roomNumber": 131,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "c761b3ed-060d-46a3-ae0d-12f2ece52b9e",
                "roomNumber": 132,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "056690dd-1f0b-49a0-9aad-bafdc627c426",
                "roomNumber": 133,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "0cd30928-1234-415b-b607-2c7ca386f561",
                "roomNumber": 134,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "a2bc69fc-3f81-4895-8339-f66b5bae5695",
                "roomNumber": 135,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "774d64f6-aec8-4d84-b623-f23eb1ed1626",
                "roomNumber": 136,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "e15ff6b2-a857-4d4c-8569-7a2fcce927b3",
                "roomNumber": 137,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "25732c6d-28bd-490c-809d-f7d7d8ccbe8a",
                "roomNumber": 138,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "7696958a-b2c7-4d24-98f5-899329c0cc50",
                "roomNumber": 139,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            },
            {
                "id": "381c7032-bb0c-4dc4-b882-27e742afc7bb",
                "roomNumber": 140,
                "capacity": 2,
                "facing": "EAST",
                "status": "AVAILABLE",
                "images": [
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/61f05b90-c9ae-4385-9e1c-d5d26151ac01-room3.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/62116168-157c-430b-b1a7-8fa5af4b3016-room2.jpeg",
                    "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/e62dc97d-f0b9-47b7-a28c-c6920079a74d-room1.jpeg"
                ],
                "amenities": [
                    {
                        "id": "5e87bedd-44fa-4d28-9708-b3ee5fb1d112",
                        "name": "24x7 Security",
                        "description": "Round-the-clock CCTV and security guard presence",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/ee516937-e9cc-4803-8e7f-8844fecbb7b8-security-safe-svgrepo-com.svg"
                    },
                    {
                        "id": "19989bd8-8f5e-4d45-b811-3f8fc7addcbb",
                        "name": "Cafeteria",
                        "description": "Nutritious meals and beverages served daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/a6dec772-5b57-4cd1-ba90-95432a28907e-cafeteria-svgrepo-com.svg"
                    },
                    {
                        "id": "f32c4736-c970-41db-bbe6-4554094cb929",
                        "name": "Laundry Service",
                        "description": "On-demand laundry and ironing service",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/8e0a5f50-1cad-4521-9d96-e0da08754bd0-laundry-svgrepo-com.svg"
                    },
                    {
                        "id": "987d9a37-f4c5-48dd-9d89-2b13526f53aa",
                        "name": "AC",
                        "description": "Cool and comfortable air conditioning in all rooms",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/83839422-8c5f-4e3f-9f45-ba8e4d68ffc3-ac-svgrepo-com.svg"
                    },
                    {
                        "id": "2d71bc62-9d0a-4226-860c-ba336ee47e73",
                        "name": "Gym Facility",
                        "description": "Fully equipped fitness center accessible daily",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/9e6085c8-779e-4dd0-b074-15e21887727c-gym-svgrepo-com.svg"
                    },
                    {
                        "id": "fdf78681-2c55-4631-ac70-6faee100a2bf",
                        "name": "Power Backup",
                        "description": "Uninterrupted power supply with full backup",
                        "icon": "https://zenith-springboot-media.s3.amazonaws.com/uploads/public/d52eaee9-6465-48c2-bd11-2588703019f2-battery-bolt-alt-svgrepo-com.svg"
                    }
                ],
                "availableBeds": 0
            }
        ]
    };

    return (
        <div className="p-4 h-screen bg-gray-50">
            <div className="mb-4">
                <h1 className="text-2xl font-bold">Floor Layout Viewer</h1>
                <p className="text-gray-600">
                    Selected Room ID: {selectedRoomId || 'None'}
                </p>
            </div>

            <div className="h-[600px] lg:h-[700px]">
                <FloorLayoutViewer
                    layoutData={sampleData}
                    onRoomSelect={(roomId) => {
                        console.log('Room selected:', roomId);
                        setSelectedRoomId(roomId);
                    }}
                    showGrid={true}
                    zoomEnabled={true}
                />
            </div>
        </div>
    );
}

export default App;