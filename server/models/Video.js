const { Schema, model } = require("mongoose");

const videoSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  videoLink: {
    type: String,
    required: true,
  },
});

const Video = model("Video", videoSchema);

module.exports = Video;
