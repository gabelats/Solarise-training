const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  video: {
    type: string,
    required: true,
  },
});
