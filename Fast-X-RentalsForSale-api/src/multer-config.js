const multer = require("multer");

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./src/uploads"); 
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    const ext = file.originalname.split(".").pop();
    cb(null, file.fieldname + "-" + uniqueSuffix + "." + ext);
  },
});

// Create multer instance
const upload = multer({ storage });

module.exports = upload;
