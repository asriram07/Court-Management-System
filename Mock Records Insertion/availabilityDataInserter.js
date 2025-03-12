const {getAvailabilityDataSchema, getAvailabilityDataModel} = require("../Database Schemas - Models/availabilityDataUtilities");
const mongoose = require("mongoose");
const {courtTimings} = require('./Constant_Data');

function generateRecords(){
    let results = [];
    for(let i = 0; i<30; i++){
        let courdId = `court-${i}`;
        let date = new Date();
        for(let j = 0; j<30; j++){
            date.setDate(date.getDate()+j);
            let dateString = date.toISOString().slice(0,10).split("-").reverse("").join("-");
            let key = courdId + ":" + dateString;
            results.push({
                index : key,
                slots : courtTimings
            })
        }
    }
    return results;
}


(async ()=>{
    const avalbyModel = await getAvailabilityDataModel();
    let results = generateRecords()
    try{
        await avalbyModel.insertMany(results);
        console.log("Records Inserted Successfully...!");
    }catch(err){
        console.log(err);
    }
    await mongoose.connection.close();
    console.log("Closed DB Connection...!")
    
})();



// NOTE :
// Yes, by default, if you use insertMany() and one record violates a unique
// constraint (e.g., a duplicate entry for a unique: true field like index 
// in your schema), the entire operation will fail, and no records will be 
// inserted. 


// Solution: ordered: false Option
// To allow valid records to be inserted even if some records cause errors,
//  use the ordered: false option in insertMany():


// How It Works:
// Default (ordered: true) → If one record fails, the entire batch fails.
// Using (ordered: false) → MongoDB inserts all valid records and
//  only skips duplicates or errors.