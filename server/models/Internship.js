const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const internshipSchema = new Schema({
    companyName:{
        type: String,
        required:true,
    },
    description:{
        type: String,
        required:true,
    },
    location:{
        type: String,
        required:true,
    },
    stipend:{
        type: String,
        required:true,
    },
    techstack:{
        type: [String],
        required:true,
    },
    lastDate:{
        type: Date,
        required:true,
    },
    duration:{
        type: String,
        required:true,
    },
    startDate:{
        type: Date,
        required:true,
    },
    endDate:{
        type: Date,
        required:true,
    },
    createdBy: {
        type: ObjectId,
        ref: "Employer"
    }
}, {timestamps: true})

const Internship = mongoose.model('Internship',internshipSchema);

module.exports = Internship;