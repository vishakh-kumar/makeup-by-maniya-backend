const mongoose = require("mongoose");
const carouselSchema = new mongoose.Schema({
    cloudinary_id: {
        type: String,
    },
});
module.exports = mongoose.model("Carousel", carouselSchema);
