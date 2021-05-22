const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const applicationSchema = new Schema({
    applyingFor:{
        type: String,
        required:true,
    },
    employer: {
        type: ObjectId,
        ref: "Employer",
        required: true
    },
    appliedJob: {
        type: ObjectId,
        ref: "Job",
    },
    appliedFresherJob: {
        type: ObjectId,
        ref: "FreshersJob",
    },
    appliedInternship: {
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
        required: true
    },
    status: {
        type: String,
        required: true
    },
    applicantReceiveNote: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Application = mongoose.model('Internship',applicationSchema);

module.exports = Application;

