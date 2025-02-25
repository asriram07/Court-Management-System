const mongoose = require("mongoose");
require('dotenv').config()

const mongoURI = "mongodb://localhost:27017/Court-Managment-System";

mongoose.connect(mongoURI,{})
.then(()=>{console.log("Connected to databse successfully...");})
.catch(err=>{console.log("Failed to connect to database with error : ", err);})

const courtSchema = new mongoose.Schema({
    court_id: { type: String, required: true, unique: true, index: true }, // Unique and Indexed
    court_name: { type: String, required: true }, // Required Name
    court_contact_details: {
        email: { type: String, required: true, match: /^[a-z0-0A-Z]+@gmail.com$/ }, // Email validation
        phone: { type: String, required: true, match: /^[1-9][0-9]{9}$/ } // 10-digit phone validation
    },
  court_type : {type : String, required : true},
  court_address: {'type' : String, 'required' : true},
  city: { type: String, required: true },
  state: { type: String, required: true },
  pincode: { type: String, required: true, match: /^[1-9][0-9]{5}$/ }, // 6-digit PIN validation
  coordinates : {
    lattitude : {type : Number, required : true},
    longitude : {type : Number, required : true}
  },
  photos: [
    {
      link: { type: String, required: true }, // URL of the photo
      count: { type: Number, required: true, min: 1 } // Number of photos
    }
  ]
}, { timestamps: true }); // Adds createdAt and updatedAt timestamps

// Create a Model
const Court = mongoose.model("Court-Details", courtSchema);
module.exports.courtModel = Court;
