const jwt = require('jsonwebtoken')
const User = require('../models/student.js')

const auth_student = async (req,res,next) =>{
    try{
        const token = req.header('Authorization').replace('Bearer ','')
        const decoded = jwt.verify(token,JWT_SECRET)
        const user = await User.findOne({ _id : decoded._id, 'tokens.token':token})
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

module.exports = auth_student