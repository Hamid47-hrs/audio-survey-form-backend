const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  userName: {
    type: String,
    required: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  popMusic_1: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  popMusic_2: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  popMusic_3: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  rockMusic_1: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  rockMusic_2: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  rockMusic_3: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  jazzMusic_1: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  jazzMusic_2: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  jazzMusic_3: [
    {
      _id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Audio",
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      rate: {
        type: Number,
        required: true,
      },
    },
  ],
  comment: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
