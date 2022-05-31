const express = require("express");
const User = require("../models/user");

const router = express.Router();

router.post("/audio-survey-form", (req, res, next) => {
  const user = new User({
    userName: req.body.userName,
    nationality: req.body.nationality,
    age: req.body.age,
    angry_1: req.body.angry_1,
    angry_2: req.body.angry_2,
    angry_3: req.body.angry_3,
    joy_1: req.body.joy_1,
    joy_2: req.body.joy_2,
    joy_3: req.body.joy_3,
    sad_1: req.body.sad_1,
    sad_2: req.body.sad_2,
    sad_3: req.body.sad_3,
  });
  user
    .save()
    .then(() => {
      res.status(200).json({
        message: "Done. Thank You For Participating.",
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
