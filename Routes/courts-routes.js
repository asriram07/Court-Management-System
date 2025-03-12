const {getRedisConnection} = require("../Connections/redis_Connection");
const {getCourtsDataModel} = require('../Database Schemas - Models/courtDataUtilities')
const express = require("express");
const router = express.Router();



router.get("/getCourtDetails/:courtId", async (req, res) => {
    try {
        const courtId = req.params.courtId;
        const courtModel = await getCourtsDataModel();
        const courtData = await courtModel.findOne({ court_id: courtId });
        if (courtData) {
            return res.status(200).json(courtData);
        }
        res.status(404).json({ message: "Court details not available for the given court ID." });
    } catch (error) {
        console.error("Error fetching court details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});
//response = {...courtData[courtId], ... {"slots" : availabilityData[courtId]}, ...{"media resources" : {}} also works



router.get("*", async (req,res)=>{
    const { pincode, court_type, court_name } = req.query;
    const courtModel = await getCourtsDataModel();
    // Construct dynamic filter object
    let filter = {};
    if (pincode) {
        filter.pincode = pincode;
    }
    if (court_type) {
        filter.court_type = court_type;
    }
    if (court_name) {
        // Match exact or partial name using regex (case-insensitive)
        filter.court_name = { $regex: court_name, $options: "i" };
    }
    
    try {
        const courtModel = await getCourtsDataModel();
        const courtData = await courtModel.find(filter);
        if (courtData.length>0) {
            return res.status(200).json(courtData);
        }
        res.status(404).json({ message: "Court details not available for the given court ID." });
    } catch (error) {
        console.error("Error fetching court details:", error);
        res.status(500).json({ message: "Internal server error" });
    }
})

router.post("/bookCourt", async (req, res)=>{
    //populate from JWT
    let userId = "1234";
    const {court_id, date_time, value} = req.body;
    value = Math.round(value*100)
    let bookingId = `${court_id}-${date_time}`

    //Stripe Payment Object Creation
    const paymentIntent = await stripe.paymentIntents.create({
        amount : value,
        currency : "USD"
    });
    const paymentIntentId =  paymentIntent["id"];
    let redisClient = await getRedisConnection();
    await redisClient.set(userId, JSON.stringify({paymentIntentId, bookingId, value}));
    await redisClient.set(bookingId, userId);
    res.send({paymentIntent, value, bookingId});
})


/**
 * Verifies a user's payment by checking the payment status from Stripe.
 * - Retrieves payment details from Redis using `userId`.
 * - If payment is successful (`succeeded`), it removes the Redis entry for `userId`
 *   userId to {paymentId, bookingId and value} since there is no need of it anymore
 *   and marks `bookingId` as `true` in Redis. ->we will later use this for batch processing
 * - Responds with success, pending, or failure based on the payment status.
 */
router.post("/verify-payment", async (req, res) => {
    try {
        // Get from JWT Token (Placeholder)
        let userId = "1234"; 
        const { bookingIdC } = req.body;
        let redisClient = await getRedisConnection();
        const redisValue = await redisClient.get(userId);
        if (!redisValue) {
            return res.status(400).json({ message: "Invalid request or session expired" });
        }
        const { paymentIntentId, bookingId } = JSON.parse(redisValue);
        if (bookingId === bookingIdC) {
            const paymentIntent = await stripe.paymentIntents.retrieve(paymentIntentId);
            if (paymentIntent && paymentIntent.status === 'succeeded') {
                await redisClient.del(userId);
                await redisClient.set(bookingId, true);
                return res.status(200).json({ message: "Success" });
            }
            return res.status(200).json({ message: "Not completed yet" });
        }
        res.status(400).json({ message: "Failure" });
    } catch (error) {
        console.error("Error verifying payment:", error);
        res.status(500).json({ message: "Internal server error" });
    }
});



//always sends value converted to cents or paise etc
//console.log(req.query); -> We can get query parameters in POST Request as well


//We send back payment ID and map userId to (bookingID, value)
//Once payment is done we recheck userId with bookingId and value if we received or not are same

//we map userid with paymentId, bookingId and value for security purpose
//Booking id (courtId + datetime) with userID for concurency purpose