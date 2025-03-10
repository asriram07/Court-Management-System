const DB = require("../Connections/databaseConnectionUtilities");
const mongoose = require('mongoose');

function getAvailabilityDataSchema(){
    const availabilityDetailsSchema = new mongoose.Schema({
        'index' : {type: String, index : true, required : true},
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