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
  angry_1: {
    audios: [
      {
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
  },
  angry_2: {
    audios: [
      {
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
  },
  angry_3: {
    audios: [
      {
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
  },
  joy_1: {
    audios: [
      {
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
  },
  joy_2: {
    audios: [
      {
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
  },
  joy_3: {
    audios: [
      {
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
  },
  sad_1: {
    audios: [
      {
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
  },
  sad_2: {
    audios: [
      {
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
  },
  sad_3: {
    audios: [
      {
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
  },
});

module.exports = mongoose.model("User", userSchema);
