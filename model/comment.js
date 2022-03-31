const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    comment: String,
    name: String,
});
module.exports = mongoose.model("Comment", commentSchema);
