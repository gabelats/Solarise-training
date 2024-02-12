const { Admin, Employee, Video } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find().populate("video");
    },
    employee: async (parent, { username }) => {
      return await Employee.findOne({ username }).populate(video);
    },
    videos: async () => {
      return await Video.find();
    },
    video: async (parent, { videoId }) => {
      return await Video.findOne({ _id: videoId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return await Admin.findOne({ _id: context.user._id }).populate(
          "employees"
        );
      }
      throw AuthenticationError;
    },
  },

  Mutation: {
    addEmployee: async (parent, { name, username, password }) => {
      if (context.user) {
        const employee = await Employee.create({
          name,
          username,
          password,
        });
        return employee;
      }
      throw AuthenticationError;
    },
    login: async (parent, { email, password }) => {
      const admin = await Admin.findOne({ email });
      if (!admin) {
        throw AuthenticationError;
      }
      const correctPw = await admin.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }

      const token = signToken(admin);

      return { token, admin };
    },
    addVideo: async (parent, { title, videoLink }, context) => {
      if (context.user) {
        const video = await Video.create({
          title,
          videoLink,
        });
        return video;
      }
      throw AuthenticationError;
    },
    removeEmployee: async (parent, { employeeId }, context) => {
      if (context.user) {
        const employee = await Employee.findOneAndDelete({
          _id: employeeId,
        });
        return employee;
      }
      throw AuthenticationError;
    },
    removeVideo: async (parent, { videoId }, context) => {
      if (context.user) {
        const video = await Vidoe.findOneAndDelete({
          _id: videoId,
        });
        return video;
      }
      throw AuthenticationError;
    },
  },
};
module.exports = resolvers;
