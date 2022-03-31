const router = require("express").Router();
const { upload } = require("../utils/multer");
const { sliderUpload } = require("../controllers/fileUploadControllers");

router.post("/sliderFile", upload.single("file"), sliderUpload);

module.exports = { routes: router };
