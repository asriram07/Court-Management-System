# Mongoose Model Setup Guide

## 1. Define the Database URL
First, define your MongoDB connection URI:

```javascript
const mongoose = require("mongoose");
const URI = "your-mongodb-uri-here";
```

## 2. Create a Database Connection
Connect to MongoDB using `mongoose.connect()`:

```javascript
const connection = mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
```

## 3. Define a Mongoose Schema
Create a schema to define the structure of your data:

```javascript
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    age: { type: Number, required: false },
});
```

## 4. Create a Mongoose Model
Convert the schema into a model:

```javascript
const UserModel = mongoose.model("User", userSchema);
```

## 5. Export the Model or Connection
Depending on your use case, you can either:

### Export the Model
If you need to work with the model directly:

```javascript
module.exports = UserModel;
```

### Export the Connection
If you want to return the connection instead:

```javascript
module.exports = connection;
```

## Summary
1. **URI** → Define MongoDB connection string.
2. **Connect** → Establish connection using `mongoose.connect()`.
3. **Schema** → Define schema using `new mongoose.Schema({})`.
4. **Model** → Create model with `mongoose.model("ModelName", schema)`.
5. **Return** → Either return the **model** or the **connection**.

Now you're all set to use Mongoose for MongoDB interactions in your Node.js app!

