const Internship = require("../models/Internship");
const Job = require('../models/Job')
const FresherJob = require('../models/Freshers')
const Application = require("../models/application");
const Student = require("../models/student")
const StudentNotification = require("../models/student_notification")

exports.apply = async (req, res) => {
    const {applyingFor, appliedRoleId, applicantSendNote} = req.body
    try{
        if(applyingFor.toLowerCase()==='job'){
            const job = await Job.findById(appliedRoleId)
            if(!job){
                return res.status(400).send({message: 'inavlid job id'})
            }
            else{
                const application = new Application({
                    applyingFor: applyingFor.toLowerCase(),
                    applied_job: appliedRoleId,
                    employer: job.createdBy,
                    applicantId: req.user._id,
                    applicantSendNote,
                    status: "pending"
                })
                await application.save()
                return res.status(200).send({message: 'application sent!', status: "Pending!", applicationId: application._id})
            }
        }
        if(applyingFor.toLowerCase()==='internship'){
            const internship = await Internship.findById(appliedRoleId)
            if(!internship){
                return res.status(400).send({message: 'inavlid internship id'})
            }
            else{
                console.log(appliedRoleId)
                const application_ = new Application({
                    applyingFor: applyingFor.toLowerCase(),
                    applied_internship: appliedRoleId,
                    employer: internship.createdBy,
                    applicantId: req.user._id,
                    applicantSendNote,
                    status: "pending"
                })
                await application_.save()
                return res.status(200).send({message: 'application sent!', status: "Pending!", applicationId: application_._id})
            }
        } 
        if(applyingFor.toLowerCase()==='fresherjob' || applyingFor.toLowerCase()==='fresher job'){
            const fresherjob = await FresherJob.findById(appliedRoleId)
            if(!fresherjob){
                return res.status(400).send({message: 'inavlid fresherjob id'})
            }
            else{
                const _application = new Application({
                    applyingFor: "fresherjob",
                    applied_fresherjob: appliedRoleId,
                    employer: fresherjob.createdBy,
                    applicantId: req.user._id,
                    applicantSendNote,
                    status: "pending"
                })
                await _application.save()
                return res.status(200).send({message: 'application sent!', status: "Pending!", applicationId: _application._id})
            }
        }
    }
    catch(e){
        console.log(e)
        return res.status(400).send({message: 'something went wrong!'})
    }
}

exports.approve = async (req, res) => {
    try{
        const application = await Application.findById(req.params.id)
        if(application.employer.toString() === req.user._id.toString()){
            application.status = "approved"
            application.applicantReceiveNote = "you have been shortlisted for the elementary-test round!"
            await application.save()

            try {
                const student = await Student.findById(application.applicantId)
                if(student){
                    const notification = new StudentNotification({
                        notificationFor: student._id,
                        notificationBy: req.user._id,
                        notificationTitle: `Congratulations! your application has been approved, application id ${application._id}`,
                        applicationNotification: application._id,
                        status: "unread"
                    })
                    await notification.save() 
                }
                  
            }
            catch(e){
              console.log(e)
            }

            return res.status(200).send({message: "application has been approved"})
        }
        else{
            return res.status(200).send({message: "you cannot approve the application, you did not create the job/ internship!"})
        }
    }
    catch(e){
        return res.status(400).send({message: "something went wrong!"})
    }
}

exports.reject = async (req, res) => {
    try{
        const application = await Application.findById(req.params.id)
        if(application.employer.toString() === req.user._id.toString()){
            application.status = "rejected"
            application.applicantReceiveNote = "sorry, you have not been shortlisted for the elementary-test round!"
            
            try {
                const student = await Student.findById(application.applicantId)
                if(student){
                    const notification = new StudentNotification({
                        notificationFor: student._id,
                        notificationBy: req.user._id,
                        notificationTitle: `Sorry to inform your application has been rejected! your application has been approved, application id ${application._id}`,
                        applicationNotification: application._id,
                        status: "unread"
                    })
                    await notification.save() 
                }
                  
            }
            catch(e){
              console.log(e)
            }

            await application.save()
            return res.status(200).send({message: "application has been rejected!"})
        }
        else{
            return res.status(200).send({message: "you cannot approve the application, you did not create the job/ internship!"})
        }
    }
    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }
}


exports.student_getPendingApplications = async(req, res) => {
    try{
        const applications = await Application.find({status: "pending", applicantId: req.user._id})
                                    .sort("-createdAt")
        if(!applications || applications.length===0){
            return res.status(200).send({message: "no pending applications"})
        }
        return res.status(200).send(applications)

    }
    catch(e){

    }
}


exports.employer_getPendingInternships = async(req, res) => {
    try{
        const applications = await Application.find({employer: req.user._id, status: 'pending', applyingFor: "internship"})
                                    .sort("-createdAt")
        if(!applications || applications.length===0){
            return res.status(200).send({message: "no pending internship applications"})
        }
        return res.status(200).send(applications)
        
    }

    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }

}

exports.employer_getPendingJobs = async(req, res) => {
    try{
        const applications = await Application.find({employer: req.user._id, status: 'pending', applyingFor: "job"})
                                        .sort("-createdAt")
        if(!applications || applications.length===0){
            return res.status(200).send({message: "no pending job applications"})
        }
        return res.status(200).send(applications)
        
    }
    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }

}


exports.student_getRejectedApplications = async(req, res) => {
    try{
        const applications = await Application.find({status: "rejected", applicantId: req.user._id})
                                    .sort("-createdAt")
        if(!applications || applications.length===0){
            return res.status(200).send({message: "no rejected applications"})
        }
        return res.status(200).send(applications)
    }
    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }

}

exports.employer_getPendingFresherJobs = async(req, res) => {
    try{
        const applications = await Application.find({employer: req.user._id, status: 'pending', applyingFor: "fresherjob"})
                                        .sort("-createdAt")
        if(!applications || applications.length===0){
            return res.status(200).send({message: "no pending fresher job applications"})
        }
        return res.status(200).send(applications)
        
    }

    catch(e){
        console.log(e)
        return res.status(400).send({message: "something went wrong!"})
    }

}

exports.student_getApprovedApplications = async(req, res) => {
    try{
        const applications = await Application.find({status: "approved", applicantId: req.user._id})
                                    .sort("-createdAt")
        if(!applications || applications.length===0){
            return res.status(200).send({message: "no approved applications"})
        }
        return res.status(200).send(applications)
    }
    catch(e){
          console.log(e)
          return res.status(400).send({message: "something went wrong!"})
     }
}


