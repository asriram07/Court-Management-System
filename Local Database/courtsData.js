const courtData = {
    "CRT-7017": {
        "id": "CRT-7017",
        "name": "Pro Play Zone",
        "pincode": 32304,
        "sportType": "Pickleball",
        "surfaceType": "Synthetic",
        "availability": "Booked",
        "lighting": false,
        "indoor": false,
        "capacity": 92,
        "rating": 3.6,
        "pricePerHour": 48.82
    },
    "CRT-9305": {
        "id": "CRT-9305",
        "name": "Victory Grounds",
        "pincode": 32304,
        "sportType": "Volleyball",
        "surfaceType": "Grass",
        "availability": "Available",
        "lighting": false,
        "indoor": false,
        "capacity": 84,
        "rating": 4.0,
        "pricePerHour": 38.82
    },
    "CRT-6795": {
        "id": "CRT-6795",
        "name": "Pro Play Zone",
        "pincode": 32305,
        "sportType": "Volleyball",
        "surfaceType": "Synthetic",
        "availability": "Available",
        "lighting": true,
        "indoor": false,
        "capacity": 99,
        "rating": 4.1,
        "pricePerHour": 45.01
    },
    "CRT-5763": {
        "id": "CRT-5763",
        "name": "Elite Sports Arena",
        "pincode": 32304,
        "sportType": "Volleyball",
        "surfaceType": "Synthetic",
        "availability": "Available",
        "lighting": true,
        "indoor": true,
        "capacity": 27,
        "rating": 4.5,
        "pricePerHour": 32.45
    },
    "CRT-9558": {
        "id": "CRT-9558",
        "name": "Pro Play Zone",
        "pincode": 32304,
        "sportType": "Cricket",
        "surfaceType": "Clay",
        "availability": "Available",
        "lighting": true,
        "indoor": true,
        "capacity": 10,
        "rating": 4.1,
        "pricePerHour": 46.62
    },
    "CRT-1791": {
        "id": "CRT-1791",
        "name": "Victory Grounds",
        "pincode": 32305,
        "sportType": "Tennis",
        "surfaceType": "Clay",
        "availability": "Available",
        "lighting": true,
        "indoor": false,
        "capacity": 56,
        "rating": 4.4,
        "pricePerHour": 18.42
    },
    "CRT-4632": {
        "id": "CRT-4632",
        "name": "Champion's Hub",
        "pincode": 32303,
        "sportType": "Cricket",
        "surfaceType": "Synthetic",
        "availability": "Under Maintenance",
        "lighting": true,
        "indoor": false,
        "capacity": 93,
        "rating": 4.3,
        "pricePerHour": 43.96
    },
    "CRT-6190": {
        "id": "CRT-6190",
        "name": "Champion's Hub",
        "pincode": 32303,
        "sportType": "Pickleball",
        "surfaceType": "Grass",
        "availability": "Available",
        "lighting": true,
        "indoor": false,
        "capacity": 66,
        "rating": 4.3,
        "pricePerHour": 18.67
    },
    "CRT-5879": {
        "id": "CRT-5879",
        "name": "Champion's Hub",
        "pincode": 32304,
        "sportType": "Volleyball",
        "surfaceType": "Synthetic",
        "availability": "Under Maintenance",
        "lighting": false,
        "indoor": false,
        "capacity": 31,
        "rating": 4.3,
        "pricePerHour": 32.98
    },
    "CRT-3041": {
        "id": "CRT-3041",
        "name": "Elite Sports Arena",
        "pincode": 32303,
        "sportType": "Volleyball",
        "surfaceType": "Grass",
        "availability": "Booked",
        "lighting": false,
        "indoor": false,
        "capacity": 53,
        "rating": 4.4,
        "pricePerHour": 13.28
    },
    "CRT-3678": {
        "id": "CRT-3678",
        "name": "Pro Play Zone",
        "pincode": 32304,
        "sportType": "Pickleball",
        "surfaceType": "Synthetic",
        "availability": "Under Maintenance",
        "lighting": false,
        "indoor": false,
        "capacity": 89,
        "rating": 4.4,
        "pricePerHour": 25.27
    },
    "CRT-4604": {
        "id": "CRT-4604",
        "name": "Elite Sports Arena",
        "pincode": 32304,
        "sportType": "Volleyball",
        "surfaceType": "Synthetic",
        "availability": "Available",
        "lighting": true,
        "indoor": true,
        "capacity": 33,
        "rating": 3.8,
        "pricePerHour": 10.37
    },
    "CRT-3639": {
        "id": "CRT-3639",
        "name": "Victory Grounds",
        "pincode": 32304,
        "sportType": "Tennis",
        "surfaceType": "Grass",
        "availability": "Under Maintenance",
        "lighting": true,
        "indoor": true,
        "capacity": 77,
        "rating": 4.8,
        "pricePerHour": 31.61
    },
    "CRT-6659": {
        "id": "CRT-6659",
        "name": "Grand Court Center",
        "pincode": 32305,
        "sportType": "Cricket",
        "surfaceType": "Clay",
        "availability": "Under Maintenance",
        "lighting": false,
        "indoor": false,
        "capacity": 88,
        "rating": 3.9,
        "pricePerHour": 29.71
    },
    "CRT-4162": {
        "id": "CRT-4162",
        "name": "Elite Sports Arena",
        "pincode": 32303,
        "sportType": "Volleyball",
        "surfaceType": "Synthetic",
        "availability": "Under Maintenance",
        "lighting": true,
        "indoor": true,
        "capacity": 58,
        "rating": 4.5,
        "pricePerHour": 13.09
    }
};



// "CRT-7017-01-2025" : {
//     01-01-2025 : {

//     }
//     02-01-2025 : {

//     }
// }

let availabilityData = {
        "CRT-7017" : [{ "date": "2025-01-01", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"]},
            { "date": "2025-01-02", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-03", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-04", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-05", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-06", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-07", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] }
        ],
    "CRT-9558" : [
            { "date": "2025-01-01", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-02", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-03", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-04", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-05", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-06", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-07", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] }
        ],
    "CRT-6795": [
            { "date": "2025-01-01", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-02", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-03", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-04", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-05", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-06", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] },
            { "date": "2025-01-07", "times": ["8:00 AM - 8:30 AM", "8:30 AM - 9:00 AM", "9:00 AM - 9:30 AM", "9:30 AM - 10:00 AM", "10:00 AM - 10:30 AM", "10:30 AM - 11:00 AM", "11:00 AM - 11:30 AM", "11:30 AM - 12:00 PM", "12:00 PM - 12:30 PM", "12:30 PM - 1:00 PM", "1:00 PM - 1:30 PM", "1:30 PM - 2:00 PM"] }
        ]
    }


// module.exports.courtData = courtsData;
// module.exports.availabilityData = availabilityData;

module.exports = {courtData, availabilityData};