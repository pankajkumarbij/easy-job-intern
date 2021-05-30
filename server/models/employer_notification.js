const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const employerNotificationSchema = new Schema({
    notificationFor:{
        type: ObjectId,
        ref: "Employer",
        required: true
    },
    notificationBy:{
        type: ObjectId,
        ref: "Student",
        required: true
    },
    notificationTitle: {
        type: String,
        required: true
    },
    internshipApplicationNotification: {
        type: ObjectId,
        ref: "Application",
    },
    jobApplicationNotification: {
        type: ObjectId,
        ref: "Application",
    },
    fresherJobApplicationNotification: {
        type: ObjectId,
        ref: "Application",
    },
    status: {
        type: String,
        enum: ['read', 'unread'],
        required: true
    },
    
}, {timestamps: true})

const EmployerNotification = mongoose.model('EmployerNotification', employerNotificationSchema);

module.exports = EmployerNotification;