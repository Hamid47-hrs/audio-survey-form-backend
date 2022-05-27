const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, callBack) => {
    callBack(null, "./public");
  },
  filename: (req, file, callBack) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    callBack(null, fileName);
  },
});

const uploadAudio = multer({
  storage: storage,
});

module.exports = uploadAudio;
