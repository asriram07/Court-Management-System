//npm init

//dev dependecies vs dependencies in package.json

//package-lock

//package-lock.json vs pakcage.json

//command to install dev dependency package



// express → Web framework
// dotenv → Loads environment variables from a .env file
// cors → Enables Cross-Origin Resource Sharing
// morgan → Logs HTTP requests (useful for debugging)
// helmet → Enhances security by setting HTTP headers


//app.get("/getCourtDetails/:courtId/:uuid/wdbvfjb" -> This works


// app.post("/bookCourt",(req, res)=>{
//console.log(req.query); -> We can get query parameters in POST Request as well

//courtData!=={} ->Doesn't work like this in pyton need to do manually

//Hoisting

//const Vs Let Vs var
    


//for(obj of courtData) courtData is array [] -> Returns Undefined
//for(obj in courtData) courtData is array [] -> Returns index integer numbers

//== vs ===


//null vs undefined



//New Learning

//let results = courtData.filter(obj => !pincode || obj.pincode == pincode);
    // let results = courtData.filter((obj)=>{ 
    //     return ((!pincode || obj.pincode == pincode) && (!sportType || sportType== obj.sportType))    
    // })
    // for(let i in results){
    //     results[i]['availabilityData'] = availabilityData[results[i]["courtId"]]
    // }


// if CourtData is Object

// use Object.keys(courtData) -> Returns keys
// Object.values(courtData) -> Returns values




//const response = Object.assign({}, courtData[courtId], {"slots" : availabilityData[courtId]})
// Copies objects into together
//response = {...courtData[courtId], ... {"slots" : availabilityData[courtId]}, ...{"media resources" : {}} also works



//No matter what I do I cannot import connection synchronously for
//MongoDB Database.
//It's always asynchronous so better use a function to do this.


//Can't use await asyncFunction() directly.
//Use inside (async ()->{}());;


//How I did git refacgtoring rebasing

//need to learn about gitignore