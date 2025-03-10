const assert = require('assert');
const mongoose = require('mongoose');
const { getAvailabilityDataModel, getAvailabilityDataSchema } = require('./availabilityDataUtilities');
const { getCourtsDataModel, getCourtsDataSchema } = require('./courtDataUtilities');

(async () => {


    console.log("Running Tests...\n");
    try {
        // 🔹 Test 1: Ensure getAvailabilityDataSchema() returns a Mongoose Schema
        const availabilitySchema = getAvailabilityDataSchema();
        assert(availabilitySchema instanceof mongoose.Schema, "❌ getAvailabilityDataSchema() failed");
        console.log("✅ TestCase: getAvailabilityDataSchema - Passed");

        // 🔹 Test 2: Ensure getAvailabilityDataModel() returns a Mongoose Model
        const availabilityModel = await getAvailabilityDataModel();
        assert(availabilityModel, "❌ getAvailabilityDataModel() failed");
        console.log("✅ TestCase: getAvailabilityDataModel - Passed");

        // 🔹 Test 3: Ensure getCourtsDataSchema() returns a Mongoose Schema
        const courtsSchema = getCourtsDataSchema();
        assert(courtsSchema instanceof mongoose.Schema, "❌ getCourtsDataSchema() failed");
        console.log("✅ TestCase: getCourtsDataSchema - Passed");

        // 🔹 Test 4: Ensure getCourtsDataModel() returns a Mongoose Model
        const courtsModel = await getCourtsDataModel();
        assert(courtsModel, "❌ getCourtsDataModel() failed");
        console.log("✅ TestCase: getCourtsDataModel - Passed");

        console.log("\n🎉 All test cases passed successfully!");

    } catch (error) {
        console.error("❌ Test Failed:", error.message);
    }

    // Close Mongoose connection after tests
    mongoose.connection.close();
})();
