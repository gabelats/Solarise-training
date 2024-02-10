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

employeeSchema.pre("save", async function (next) {
  if (this.isNew || this.isModified("password")) {
    const saltRounds = 10;
    this.password = await bcrypt.hash(this.password, saltRounds);
  }

  next();
});

employeeSchema.methods.isCorrectPassword = async function (password) {
  return bcrypt.compare(password, this.password);
};

const Employee = model("Employee", employeeSchema);

module.exports = Employee;
