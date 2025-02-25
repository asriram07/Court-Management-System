const court = require("./courtDetailsSchema");
const courtModel = court.courtModel;

const sportsCourts = [
    { court_name: "Grand Slam Basketball Court", court_type: "Basketball", pincode: "130001" },
    { court_name: "Elite Hoops Arena", court_type: "Basketball", pincode: "130002" },
    { court_name: "Downtown Dunk Court", court_type: "Basketball", pincode: "130003" },
    { court_name: "Triple Threat Basketball Park", court_type: "Basketball", pincode: "130004" },
    { court_name: "Fast Break Court", court_type: "Basketball", pincode: "130005" },
    { court_name: "Skyline Streetball Court", court_type: "Basketball", pincode: "130006" },
    { court_name: "All-Star Hoops Center", court_type: "Basketball", pincode: "130007" },
    { court_name: "The Buzzer Beater Court", court_type: "Basketball", pincode: "130008" },
    { court_name: "Full Court Press Arena", court_type: "Basketball", pincode: "130009" },
    { court_name: "Hoop Dreams Court", court_type: "Basketball", pincode: "130010" },

    { court_name: "Champion's Soccer Field", court_type: "Soccer", pincode: "130001" },
    { court_name: "Goal Zone Arena", court_type: "Soccer", pincode: "130002" },
    { court_name: "Turf Titans Soccer Ground", court_type: "Soccer", pincode: "130003" },
    { court_name: "Striker's Paradise Field", court_type: "Soccer", pincode: "130004" },
    { court_name: "Elite Soccer Pitch", court_type: "Soccer", pincode: "130005" },
    { court_name: "Pro Kick Arena", court_type: "Soccer", pincode: "130006" },
    { court_name: "The Golden Goal Field", court_type: "Soccer", pincode: "130007" },
    { court_name: "The Penalty Box Turf", court_type: "Soccer", pincode: "130008" },
    { court_name: "Final Whistle Soccer Park", court_type: "Soccer", pincode: "130009" },
    { court_name: "Victory Lane Soccer Field", court_type: "Soccer", pincode: "130010" },

    { court_name: "Ace Point Tennis Court", court_type: "Tennis", pincode: "130001" },
    { court_name: "Baseline Smash Arena", court_type: "Tennis", pincode: "130002" },
    { court_name: "Grand Slam Tennis Center", court_type: "Tennis", pincode: "130003" },
    { court_name: "Top Spin Tennis Grounds", court_type: "Tennis", pincode: "130004" },
    { court_name: "Champion’s Clay Court", court_type: "Tennis", pincode: "130005" },
    { court_name: "Hard Court Hustle", court_type: "Tennis", pincode: "130006" },
    { court_name: "The Net Masters Arena", court_type: "Tennis", pincode: "130007" },
    { court_name: "The Rally Zone", court_type: "Tennis", pincode: "130008" },
    { court_name: "Match Point Tennis Court", court_type: "Tennis", pincode: "130009" },
    { court_name: "The Perfect Serve Court", court_type: "Tennis", pincode: "130010" }
];


function generateRecords(){
    let results = [];
    i = 0
    for(let obj of sportsCourts){
        let temp = {...obj};
        temp['court_id'] = `court-${i}`
        temp['court_contact_details'] = {
            'email' : "sample@gmail.com",
            "phone" : "9999999999"
        }
        temp['court_address'] = "1505 W Tharpe St",
        temp['city'] = "Tallahassee",
        temp['state'] = "Florida",
        temp['coordinates'] = {
            'lattitude' : 90,
            'longitude' : 90
        },
        temp['photos'] = [
            {
                "link" : "jwbudw",
                'count' : 1
            }
        ] 
        results.push(temp);
        //console.log(temp);
        i+=1;
    }

    // for(i = 0; i<30;i++){
    //     console.log(sportsCourts[i]);
    // }
    return results;
}

let results = generateRecords();
// console.log(results);
// courtModel.insertMany(results)
//     .then(() => {
//         console.log("Records inserted successfully");
//     })
//     .catch(err => {
//         console.log("Error inserting records:", err);
//     });

// ✅ Fetch Records to Verify Insertion
courtModel.find({'pincode' : '130008'})
    .then(records => {
        if (records.length === 0) {
            console.log("⚠️ No records found. Data may not be inserted.");
        } else {
            console.log("✅ Fetched Records:", records);
        }
    })
    .catch(err => {
        console.error("Error fetching records:", err);
    });
