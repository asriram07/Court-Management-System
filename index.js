require('dotenv').config()
//console.log(process.env)

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
let { courtData, availabilityData } = require("./Local Database/courtsData");


const app = express();
app.use(express.json());

app.get(["/","/home"],
    (req,res)=>{
    const date = req.query.date;
    const pincode = req.query.pincode;
    const sportType = req.query.sportType;
    const name = req.query.name;
    let result = Object.values(courtData); // Convert object to array
    result = result.filter((obj) => {  // Store the filtered result
        return ((!pincode || obj.pincode == pincode) && (!sportType || sportType == obj.sportType));
    });
    res.send(result); // Send the filtered data

})


app.get("/getCourtDetails/:courtId",(req,res)=>{
    const courtId = req.params.courtId;
    const response = Object.assign({}, courtData[courtId], {"slots" : availabilityData[courtId]}, {"media resources" : {}})
    //response = {...courtData[courtId], ... {"slots" : availabilityData[courtId]}, ...{"media resources" : {}} also works
    if(courtId in availabilityData){
        res.send(response);   
    }
    res.status(404).send("Dates not available for given court...");
})

app.post("/bookCourt",(req, res)=>{
    //console.log(req.query); -> We can get query parameters in POST Request as well

    let requestBody = req.body;
    console.log(requestBody);
    res.send([]);
})



app.use((req, res)=>{
    res.send("Test-1 Passed")
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    console.log(PORT);
    console.log("Server Spinned Up...");
    if(Object.keys(courtData).length!=0){
        console.log("Loaded Court Local Data Successfully");
    }else{
        console.log("Failed to load local court data...!!!");
    }
});