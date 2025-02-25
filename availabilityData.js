
const mongoose = require("mongoose");
require('dotenv').config()

const mongoURI = process.env.DATABASE_URL;

mongoose.connect(mongoURI,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{console.log("Connected to databse successfully...");})
.catch(err=>{console.log("Failed to connect to database with error : ", err);})


const availabilityDetailsSchema = new mongoose.Schema({
    'index' : {type: String, index : true, required : true},
    'slots' : {type : Array}
})

const availabilityData = mongoose.model('Availability-Details', availabilityDetailsSchema);
module.exports.availabilityModel = availabilityData;