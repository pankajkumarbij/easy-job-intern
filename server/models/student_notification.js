const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const studentNotificationSchema = new Schema({
    notificationFor:{
        type: ObjectId,
        ref: "Student",
        required: true
    },
    notificationBy:{
        type: ObjectId,
        ref: "Employer",
        required: true
    },
    notificationTitle: {
        type: String,
        required: true
    },
    applicationNotification: {
        type: ObjectId,
        ref: "Application",
    },
    internshipOpeningNotification: {
        type: ObjectId,
        ref: "Internship",
    },
    jobOpeningNotification: {
        type: ObjectId,
        ref: "Job",
    },
    fresherJobOpeningNotification: {
        type: ObjectId,
        ref: "FreshersJob",
    },
    status: {
        type: String,
        enum: ['read', 'unread'],
        required: true
    },
    
}, {timestamps: true})

const StudentNotification = mongoose.model('StudentNotification', studentNotificationSchema);

module.exports = StudentNotification;