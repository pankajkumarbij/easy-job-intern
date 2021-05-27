const Internship = require("../models/Internship");
const Job = require('../models/Job')
const FresherJob = require('../models/Freshers')
const Application = require("../models/application");
const Notification = require("../models/student_notification")

const ObjectID = require('mongodb').ObjectID;

exports.getNotifications = async(req, res) => {
    try{
        const notifications = await Notification.find({notificationFor: req.user._id, status: "unread"})
                                    .sort("-createdAt")
        
        if(!notifications || notifications.length===0){
            return res.status(200).send({message: "no new notifications"})
        }
        
        return res.status(200).send(notifications)
        
    }

    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }

}



