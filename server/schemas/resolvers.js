const { Admin, Employee, Video } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    employees: async () => {
      return Employee.find().populate("video");
    },
    employee: async (parent, { username }) => {
      return Employee.findOne({ username }).populate(video);
    },
    videos: async () => {
      return Video.find();
    },
    video: async (parent, { videoId }) => {
      return Video.findOne({ _id: videoId });
    },
  },
};
