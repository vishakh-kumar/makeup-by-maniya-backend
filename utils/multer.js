const multer = require("multer");
const path = require("path");

// multer config
module.exports = multer({
    storage: multer.diskStorage({}),
    fileFilter: (req, file, cb) => {
        // path.extname to extract the extension(format)
        let ext = path.extname(file.originalname);
        if (ext !== ".jpg" && ext !== ".jpeg" && ext !== ".png") {
            // callback to not except the unsupported file
            cb(new Error("File type is not supported"), false);
            return;
        }
        cb(null, true);
    },
});
