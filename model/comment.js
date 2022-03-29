const mongoose = require("mongoose");
const commentSchema = new mongoose.Schema({
    comment: {
        type: String,
    },
    name: {
        type: String,
    },
});
module.exports = mongoose.model("Comment", commentSchema);
