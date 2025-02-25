require('dotenv').config()
//console.log(process.env)

const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const Stripe = require("stripe");
const CORS = require("cors");
const redis = require("redis");
const redisClient = redis.createClient({
    url:'redis://localhost:6379'
})
redisClient.on('connect',()=>console.log('Connected to Redis ✅'));
redisClient.on('error', (err) => console.error('Redis Error ❌:', err));


const allowedOrigins = ["http://127.0.0.1:5501"];

const corsOptions = {
    origin : (origin, callback)=>{
        if(!origin || allowedOrigins.includes(origin)){
            callback(null, true);
        }else{
            callback(new Error("Not allowed by CORS"));
        }
    }
}
const stripe = Stripe(process.env.STRIPE_KEY);
let { courtData, availabilityData } = require("./Local Database/courtsData");


const app = express();
app.use(CORS(corsOptions));
app.use(express.json());

app.get(["/","/home"],(req,res)=>{
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

app.post("/bookCourt",async (req, res, amount = 100, currency = 200)=>{
    //console.log(req.query); -> We can get query parameters in POST Request as well
    let userId = "1234";
    let date = Date.now();
    let bookingId = date + "-" + userId; //`${date}-${userId}` ->Convers to string automatically
    let requestBody = req.body;
    const {items} = requestBody;
    let value = 0;
    for(let item in items){
        if(item in courtData){
            value+=courtData[item]['pricePerHour']
        }
    }
    let prev = await redisClient.get(userId);
    value = Math.round(value*100)//always sends value converted to cents or paise etc
    
    const paymentIntent = await stripe.paymentIntents.create({
        amount : value,
        currency : "USD"
    });
    const paymentIntentId =  paymentIntent["id"];
    console.log(bookingId, paymentIntentId);
    //const paymentIntent = {};
    await redisClient.set(userId, JSON.stringify({bookingId, value}));
    await redisClient.set(bookingId, paymentIntentId);
    res.send({paymentIntent, value, bookingId});
})

app.post("/verify-payment", async (req, res)=>{
    let userId =  "1234";
    const {bookingId} = req.body;
    const redisValue = await redisClient.get(userId);
    const paymentIntentId = await redisClient.get(bookingId);
    const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
    if(redisValue!=null){
        let parsedBody = JSON.parse(redisValue);
        if(parsedBody["bookingId"]==bookingId && paymentIntent.status=='success'){
            res.send({"message" : "success"});
            return;
        }
        return res.send({"message" : "Not completed yet"});
    }
    res.send({"message" : "Failure"})
})


app.use((req, res)=>{
    res.send("Test-1 Passed")
})

const PORT = process.env.PORT || 8000;
app.listen(PORT, ()=>{
    (async () => {
        try {
            await redisClient.connect(); // Connect to Redis
    
            // Set and get a key-value pair
            await redisClient.set('myKey', 'Hello, Redis!');
            const value = await redisClient.get('myKey');
            console.log('Value from Redis:', value);

        } catch (error) {
            console.error('Redis Connection Failed:', error);
        }
    })();
    console.log(PORT);
    console.log("Server Spinned Up...");
    if(Object.keys(courtData).length!=0){
        console.log("Loaded Court Local Data Successfully");
    }else{
        console.log("Failed to load local court data...!!!");
    }
});