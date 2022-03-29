//================================
//          Dependencies
//================================
// config
// get .env variable
require("dotenv").config();
// pull PORT and MONGODB_URL from .env
const { PORT = 5000, MONGODB_URL } = process.env;
// import express, mongoose, cors, morgan, multer
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const morgan = require("morgan");
// const multer = require("multer");
// const storage =
var cloudinary = require("cloudinary").v2;

// initialize app
const app = express();

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
//          Models
//================================

//================================
//          Middleware
//================================
app.use(cors()); //to prevent cors error when cross-origin requests are made
app.use(morgan("dev")); //logging the calls
app.use(express.json()); //parse json bodies
// to store and retrieve variable
app.set("view engine", "ejs");

//================================
//           Routes
//================================

//===========INDEX================

app.get("/upload", async (req, res) => {
    try {
        res.render("upload");
    } catch (error) {
        res.status(400).json(error);
    }
});

//===========POST================

app.post("/upload", async (req, res) => {
    try {
        res.send("Image Upload");
    } catch (error) {
        res.status(400).json(error);
    }
});

//================================
//        Web-Listeners
//================================
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
