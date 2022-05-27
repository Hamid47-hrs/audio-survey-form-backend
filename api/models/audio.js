const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const audioSchema = new Schema({
  audioName: {
    type: String,
    required: true,
  },
  audioAddress: {
    type: String,
    required: true,
  },
  audioGenre: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Audio", audioSchema);
