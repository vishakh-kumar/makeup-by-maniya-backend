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
//          Models
//================================
const Comment = require("./model/CommentSchema");
//================================
//          Middleware
//================================
app.use(cors()); //to prevent cors error when cross-origin requests are made
app.use(morgan("dev")); //logging the calls
app.use(express.json()); //parse json bodies

//================================
//           Routes
//================================
app.get("/", (req, res) => {
    res.send("Hello");
});

//===========POST/CREATE================
app.post("/api/comment", async (req, res) => {
    try {
        res.json(await Comment.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
//===========INDEX/READ================
app.get("/api/comment", async (req, res) => {
    try {
        res.json(await Comment.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
//===========UPDATE================
app.post("/api/comment/:id", async (req, res) => {
    try {
        res.json(await Comment.findByIdAndUpdate(req.params.id, req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
//===========DELETE================
app.delete("/api/comment/:id", async (req, res) => {
    try {
        res.json(await Comment.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});

//================================
//        Web-Listeners
//================================
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
