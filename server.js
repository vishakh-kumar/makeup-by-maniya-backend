//================================
//          Dependencies
//================================
// config
// get .env variable
require("dotenv").config();
// pull PORT and MONGODB_URL from .env
const { PORT = 5000 } = process.env;
// import express, mongoose, cors, morgan, multer
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
// const multer = require("multer");
const path = require("path");
// importing route files
const fileRoutes = require("./routes/carousel");
var cloudinary = require("cloudinary").v2;

// initialize app
const app = express();

//================================
//      Database Connection
//================================
require("./utils/database")();
// // establish connection
// mongoose.connect(MONGODB_URL, {
//     useUnifiedTopology: true,
//     useNewUrlParser: true,
// });
// // connection Events
// mongoose.connection
//     .on("open", () => console.log("You are connected to mongoose"))
//     .on("close", () => console.log("You are disconnected to mongoose"))
//     .on("error", (error) => console.log(error));

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

//===========POST================

app.use("/uploads", express.static(path.join(__dirname, "uploads")));
//
app.use("/api", fileRoutes.routes);
//================================
//        Web-Listeners
//================================
app.listen(PORT, () => console.log(`Listening to PORT: ${PORT}`));
