require("dotenv").config();
const mongoose = require("mongoose");
const DATABASE_URL = "mongodb://localhost:27017/Court-Managment-System";
let database_connection = null;

// Connect to the database and store the connection
const getDataBaseConnection = async () => {
  if(database_connection){
    return database_connection;
  }

  try {
    
    //try connecting to the database
    const conn = await mongoose.connect(DATABASE_URL, {});
    console.log("Connected to database successfully...");
    database_connection = conn.connection;
    return database_connection;
  } catch (error) {
    console.error("Error Connecting to the database...", error);
    throw error;
  }
};

module.exports.getDataBaseConnection = getDataBaseConnection;