const mongoose = require("mongoose");
const DBUtilities = require("../Connections/databaseConnectionUtilities");

function getCourtsDataSchema() {
  const courtSchema = new mongoose.Schema(
    {
      court_id: { type: String, required: true, unique: true, index: true }, // Unique and Indexed
      court_name: { type: String, required: true }, // Required Name
      court_contact_details: {
        email: {
          type: String,
          required: true,
          match: /^[a-z0-9A-Z]+@gmail.com$/,
        }, // Email validation
        phone: { type: String, required: true, match: /^[1-9][0-9]{9}$/ }, // 10-digit phone validation
      },
      court_type: { type: String, required: true },
      court_address: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      pincode: { type: String, required: true, match: /^[1-9][0-9]{5}$/ }, // 6-digit PIN validation
      coordinates: {
        lattitude: { type: Number, required: true },
        longitude: { type: Number, required: true },
      },
      photos: {type : Array}
    },
    { timestamps: true }
  );
  return courtSchema;
}

async function getCourtsDataModel(){
    const DBConn = await DBUtilities.getDataBaseConnection();
    const courtDataSchema = getCourtsDataSchema();
    const courtDataModel = DBConn.models['Court-Data-DB'] || DBConn.model('Court-Data-DB', courtDataSchema)
    return courtDataModel
}

module.exports = {
    getCourtsDataModel, getCourtsDataSchema
}