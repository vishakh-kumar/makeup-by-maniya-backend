const mongoose = require("mongoose");
require("dotenv").config();

module.exports = () => {
    // establish connection
    mongoose.connect(process.env.MONGODB_URL, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
    });
    // connection Events
    mongoose.connection
        .on("open", () => console.log("You are connected to mongoose"))
        .on("close", () => console.log("You are disconnected to mongoose"))
        .on("error", (error) => console.log(error));
};
