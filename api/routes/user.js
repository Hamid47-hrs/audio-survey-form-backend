const express = require("express");
const Audio = require("../models/audio");
const User = require("../models/user");

const router = express.Router();

router.post("/audio-survey-form", (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    nationality: req.body.nationality,
    age: req.body.age,
    popMusic: req.body.popMusic,
    rockMusic: req.body.rockMusic,
    comment: req.body.comment,
  });
  user
    .save()
    .then(() => {
      res.status(200).json({
        message: "Done.",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Something is Worng.",
        Error: err,
      });
    });
});

router.get("/get-user-data/:userID", (req, res, next) => {
  const userID = req.params.userID;
  User.findById(userID)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = router;
