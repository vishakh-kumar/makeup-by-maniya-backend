//================================
//          Dependencies
//================================

// get .env variable
require("dotenv").config();
// pull PORT and MONGODB_URL from .env
const { PORT = 5000, MONGODB_URL } = process.env;
// import express, mongoose, cors, morgan, multer
const express = require("express");
// initialize app
const app = express();
const cors = require("cors");
const morgan = require("morgan");
const mongoose = require("mongoose");

//================================
//      Database Connection
//================================

// establish connection
mongoose.connect(MONGODB_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
// connection Events
mongoose.connection
    .on("open", () => console.log("You are connected to mongoose"))
    .on("close", () => console.log("You are disconnected to mongoose"))
    .on("error", (error) => console.log(error));

//================================
//          Middleware
//================================
app.use(cors()); //to prevent cors error when cross-origin requests are made
app.use(morgan("dev")); //logging the calls
app.use(express.json()); //parse json bodies

//================================
//           Routes
//================================

const commmentRouter = require("./routes/comment");
const fileUploadRouter = require("./routes/fileUpload");
app.use(commmentRouter, fileUploadRouter);

//================================
//        Web-Listeners
//================================
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
