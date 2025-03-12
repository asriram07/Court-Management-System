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