const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minLength: 6,
  },
  video: [
    {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
});

employeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Employee = model("Employee", employeeSchemas);

module.exports = Employee;
