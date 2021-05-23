const Internship = require("../models/Internship");
const Job = require('../models/Job')
const FresherJob = require('../models/Freshers')
const Application = require("../models/application");

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


