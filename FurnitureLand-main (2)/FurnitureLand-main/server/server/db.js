const mongoose = require("mongoose");


const connectDB = async () => {
    await mongoose.connect("mongodb://localhost:27017/furnitureLand", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Database Connected!");
};

module.exports = connectDB;