require('dotenv').config()
//console.log(process.env)

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
let courtData = require("./Local Database/courtsData.json")

const app = express();
app.use(express.json());

app.get(["/","/home"],
    (req,res)=>{
    const date = req.query.date;
    const pincode = req.query.pincode;
    const sportType = req.query.sportType;
    const name = req.query.name;
    let results = [];
    //let results = courtData.filter(obj => !pincode || obj.pincode == pincode);

    for(i in courtData){
        obj = courtData[i];
        if((!pincode || pincode == obj.pincode)){
            results.push(obj);
        }
    }
    res.json(results);
})


app.get("/getCourtDetails/:courtId",(req,res)=>{
    const courtId = req.params.courtId;
    const uuid  = req.params.uuid;
    res.send({courtId : courtId});
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
    if(courtData.length!=0){
        console.log("Loaded Court Local Data Successfully");
    }else{
        console.log("Failed to load local court data...!!!");
    }
});