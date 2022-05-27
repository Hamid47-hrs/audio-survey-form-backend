const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const audioRoutes = require("./api/routes/audio");
const userRoutes = require("./api/routes/user");

const port = process.env.PORT || 8080;
// const uri =

const app = express();

mongoose
  .connect("mongodb://127.0.0.1:27017/audio-survey-form", {
    useNewUrlParser: true,
  })
  .then((result) => console.log(result))
  .catch((err) => console.log(err));

app.use(cors());
app.use("/public", express.static("public"));

app.use(bodyParser.urlencoded({ exteneded: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "content-type");
  res.header(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use("/audio", audioRoutes);
app.use("/user", userRoutes);

app.use((req, res, next) => {
  res.status(404).json({
    message: "Page Not Found.",
  });
});

app.listen(port);
