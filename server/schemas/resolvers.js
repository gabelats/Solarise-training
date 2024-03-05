const { Admin, Employee, Video } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
  Query: {
    employees: async () => {
      return await Employee.find().populate("video");
    },
    employee: async (parent, { username }) => {
      return await Employee.findOne({ username }).populate("video");
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
    admins: async () => {
      return await Admin.find();
    },
  },

  Mutation: {
    addEmployee: async (parent, { name, username, password }, context) => {
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
    addAdmin: async (parent, { name, username, email, password }, context) => {
      if (context.user) {
        const admin = await Admin.create({
          name,
          username,
          email,
          password,
        });
        return admin;
      }
      throw AuthenticationError;
    },
    employeeLogin: async (parent, { username, password }) => {
      const employee = await Employee.findOne({ username });
      if (!employee) {
        throw AuthenticationError;
      }
      const correctPw = await employee.isCorrectPassword(password);
      if (!correctPw) {
        throw AuthenticationError;
      }
      return employee;
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
    addVideo: async (parent, { title, videoLink, day }, context) => {
      if (context.user) {
        const video = await Video.create({
          title,
          videoLink,
          day,
        });
        return video;
      }
      throw AuthenticationError;
    },
    removeEmployee: async (parent, { username }, context) => {
      if (context.user) {
        const employee = await Employee.findOneAndDelete({
          username: username,
        });
        return employee;
      }
      throw AuthenticationError;
    },
    removeAdmin: async (parent, { email }, context) => {
      if (context.user) {
        const admin = await Admin.findOneAndDelete({
          email: email,
        });
        return admin;
      }
      throw AuthenticationError;
    },
    removeVideo: async (parent, { videoId }, context) => {
      if (context.user) {
        const video = await Video.findOneAndDelete({
          _id: videoId,
        });
        return video;
      }
      throw AuthenticationError;
    },
  },
};
module.exports = resolvers;
