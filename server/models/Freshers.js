const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const FreshersJobSchema = new Schema(
  {
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
    stream: {
      type: String,
      required: true,
    },
    industry: {
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
    createdBy: {
      type: ObjectId,
      ref: "Employer",
    },
    role: {
      type: String,
      required: true,
    },
    vacancies: {
      type: Number,
      required: true,
    },
    workFromHome: { 
        type: Boolean, 
        required: true 
    },
    partTimeAllowed: { 
        type: Boolean, 
        required: true 
    },
    prerequisites:{
        type: [String],
        required:true,
    }
    // bookmarkedBy: [
    //   {
    //     type: ObjectId,
    //     ref: "Student",
    //   },
    // ],
  },
  { timestamps: true }
);

const FreshersJob = mongoose.model("FreshersJob", FreshersJobSchema);

module.exports = FreshersJob;
