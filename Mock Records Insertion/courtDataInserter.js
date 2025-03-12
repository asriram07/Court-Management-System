const {getCourtsDataModel} = require("../Database Schemas - Models/courtDataUtilities");
const { courts } = require("./Constant_Data");
const mongoose = require("mongoose");

function generateRecords() {
  let results = [];
  for (let i in courts) {
    obj = courts[i];
    let temp = { ...obj };
    temp["court_id"] = `court-${i}`;
    temp["court_contact_details"] = {
      email: "sample@gmail.com",
      phone: "9999999999",
    };
    temp["court_address"] = "1505 W Tharpe St",
    temp["city"] = "Tallahassee",
    temp["state"] = "Florida",
    temp["coordinates"] = {
        lattitude: 90,
        longitude: 90,
    },
    temp["photos"] = [
        "./Image Data/court.jpg",
    ];
    results.push(temp);
  }
  return results;
}

(async () => {
    let results = generateRecords();
    const courtModel = await getCourtsDataModel();
    try {
        await courtModel.insertMany(results);
        console.log("Records Inserted Successfully...!");
    } catch (err) {
        console.log(err);
    }
    await mongoose.connection.close();
    console.log("Closed DB Connection...!");
})();
