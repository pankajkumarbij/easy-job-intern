const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const applicationSchema = new Schema({
    applyingFor:{
        type: String,
        enum: ['job', 'internship', 'fresherjob'],
        required:true,
        trim: true
    },
    employer: {
        type: ObjectId,
        ref: "Employer",
        required: true
    },
    applied_job: {
        type: ObjectId,
        ref: "Job",
    },
    applied_fresherjob: {
        type: ObjectId,
        ref: "FreshersJob",
    },
    applied_internship: {
        type: ObjectId,
        ref: "Internship",
    },
    applicantId: {
        type: ObjectId,
        ref: "Student",
        required: true
    },
    applicantSendNote: {
        type: String,
    },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected'],
        required: true
    },
    applicantReceiveNote: {
        type: String,
    }
}, {timestamps: true})

const Application = mongoose.model('Application',applicationSchema);

module.exports = Application;

