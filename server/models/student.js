const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../keys");
const jwt = require("jsonwebtoken");

const studentSchema = new Schema({
  personName: {
    type: String,
    required: true,
    // maxlength:40
  },
  email: {
    type: String,
    required: true,
    // unique:true
  },
  contact: {
    type: String,
    required: true,
    // minlength:10,
    // maxlength:10
  },
  password: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  institutionName: {
    type: String,
    required: true,
  },
  tokens: [
    {
      token: {
        type: String,
        required: true,
      },
    },
  ],
  status: {
    type: String,
    enum: ["Pending", "Active"],
    default: "Pending",
  },
  confirmationCode: {
    type: String,
    unique: true,
  },
  savedCompanies: [
    {
      typr: String,
    },
  ],
  bookmarkedInternship: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Internship",
    },
  ],
  bookmarkedJob: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
    },
  ],
  bookmarkedFresherJob: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "FreshersJob",
    },
  ],
});

studentSchema.methods.generateAuthToken = async function () {
  const student = this;
  const token = jwt.sign({ _id: student._id }, JWT_SECRET);
  student.tokens = student.tokens.concat({ token: token });
  await student.save();
  return token;
};

studentSchema.statics.findByCredentials = async (email, password) => {
  const student = await Student.findOne({ email: email });
  if (!student) {
    throw new Error("Invalid email or password");
  }
  const isMatch = await bcrypt.compare(password, student.password);

  if (!isMatch) {
    throw new Error("Invalid email or password");
  }

  return student;
};

studentSchema.pre("save", async function (next) {
  const student = this;
  if (student.isModified("password")) {
    student.password = await bcrypt.hash(student.password, 10);
  }
  next();
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
