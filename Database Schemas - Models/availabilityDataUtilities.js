const DB = require("../Connections/databaseConnectionUtilities");
const mongoose = require('mongoose');

function getAvailabilityDataSchema(){
    const availabilityDetailsSchema = new mongoose.Schema({
        //unique automatically creates an index
        'index' : {type: String, required : true, unique: true},
        'slots' : {type : Array}
    });
    return availabilityDetailsSchema;
}

async function getAvailabilityDataModel(){
    const dbConn = await DB.getDataBaseConnection();
    const availabilityDetailsSchema = getAvailabilityDataSchema();
    const availabilityDataModel = dbConn.models['Availability-Details-DB'] || dbConn.model('Availability-Details-DB', availabilityDetailsSchema);
    return availabilityDataModel;
}

module.exports = {
    getAvailabilityDataModel, getAvailabilityDataSchema
}


//->Get DB Connection ->Define Schema ->Give Out Model