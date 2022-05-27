const express = require("express");
const Audio = require("../models/audio");
const User = require("../models/user");
const uploadAudio = require("../middleware/multer");

const router = express.Router();

router.get("/get-all-audio", (req, res, next) => {
  Audio.find()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.get("/get-one-audio/:audioID", (req, res, next) => {
  const audoiID = req.params.audioID;

  Audio.findById(audoiID)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.post("/add-audio", uploadAudio.single("audioFile"), (req, res, next) => {
  const url = req.protocol + "://" + req.get("host");

  const audio = new Audio({
    audioName: req.file.filename,
    audioAddress: url + "/public/" + req.file.filename,
    audioGenre: req.body.audioGenre,
  });

  audio
    .save()
    .then(() => {
      res.status(200).json({
        message: "Audio File Uploaded.",
      });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
