const mongoConnection = require('./databaseConnectionUtilities.js');

(async ()=>{
    const m = await mongoConnection.getDataBaseConnection();
    assert(m, "❌ getDataBaseConnection() failed");
    console.log("✅ TestCase: getDataBaseConnection - Passed");
    
})();


//if you remember 
// const mongoConnection = require('./databaseConnectionUtilities.js')
// (async ()=>{
//was not working but 

// const mongoConnection = require('./databaseConnectionUtilities.js');
// (async ()=>{
//works


// 🔴 Why it happens?

// JavaScript sees require('./mongodb-connection.js')
//  (async ... as a single statement.
// It gets confused and throws a syntax error.
// ✅ Solutions
// 1️⃣ Always Add a Semicolon After require() (Best Practice)
    
