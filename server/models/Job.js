const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const JobSchema = new Schema({
  companyName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  salary: {
    type: String,
    required: true,
  },
  techstack: {
    type: [String],
    required: true,
  },
  lastDate: {
    type: Date,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  experience: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: ObjectId,
    ref: "Employer",
  },
  role: {
    type: String,
    required: true
  },
  vacancies: {
    type: Number,
    required: true
  }
}, {timestamps: true});

const Job = mongoose.model("Job", JobSchema);

module.exports = Job;
