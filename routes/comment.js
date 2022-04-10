const express = require("express");
const router = express.Router();
const Comment = require("../model/CommentSchema");
//===========POST/CREATE================
router.post("/api/comment", async (req, res) => {
    try {
        res.json(await Comment.create(req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
//===========INDEX/READ================
router.get("/api/comment", async (req, res) => {
    try {
        res.json(await Comment.find({}));
    } catch (error) {
        res.status(400).json(error);
    }
});
//===========UPDATE================
router.post("/api/comment/:id", async (req, res) => {
    try {
        res.json(await Comment.findByIdAndUpdate(req.params.id, req.body));
    } catch (error) {
        res.status(400).json(error);
    }
});
//===========DELETE================
router.delete("/api/comment/:id", async (req, res) => {
    try {
        res.json(await Comment.findByIdAndDelete(req.params.id));
    } catch (error) {
        res.status(400).json(error);
    }
});
module.exports = router;
