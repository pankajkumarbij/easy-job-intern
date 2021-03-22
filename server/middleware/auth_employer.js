const jwt = require('jsonwebtoken')
const Employer = require('../models/employer.js')
const {JWT_SECRET} = require('../keys')

const auth_employer = async (req,res,next) =>{
    try{
        // Authentication type Bearer
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,JWT_SECRET)
        const user = await Employer.findOne({ _id : decoded._id, 'tokens.token':token})
        if(!user){
            throw new Error("error")
        }
        req.token = token
        req.user = user
    }
    catch(e){
        return res.send({error : "Please Authenticate"})
    }
    next()
}

module.exports = auth_employer