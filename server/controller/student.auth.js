const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {JWT_SECRET} = require('../keys');
const auth_student = require('../middleware/auth_student.js');
const Student = require("../models/student");


exports.signup = async (req, res) => {
    const {institutionName,personName,email,contact,password,passwordConfirmation,branch,year,degree} = req.body
    if(password !== passwordConfirmation){
        return res.json({error:"Password dosen't match"})
    }
    if(!institutionName || !personName || !email || !contact || !password || !passwordConfirmation || !branch || !year || !degree  ){
        return res.json({error:"Please add all fields"});
    }
    try{
        const savedUser = await Student.findOne({email})
        if(savedUser){
            return res.json({error:"User already exsist"})
        }
        const user = new Student({
            institutionName,
            personName,
            email,
            contact,
            branch,
            year,
            degree,
            password
        })
        const token = await user.generateAuthToken()
        await user.save()
        
        res.json({message:"Saved Succcessfully",user:user, token:token})
    }
    catch(e){
        console.log(e)
    }
}
   

// SignIn       post      /auth/signin


exports.signin = async (req, res) => {
    try{
        if(!req.body.email || !req.body.password){
            return res.json({error:"Please Add Email or Password"})
        }
        try{
            savedUser = await Student.findByCredentials(req.body.email, req.body.password)
        }
        catch(e){
            return res.json({error:"Invalid email or password"})
        }
        const {_id,personName,email,contact,branch,year,degree} = savedUser
        const token = await savedUser.generateAuthToken()
        return res.status(200).json( {message: 'SignIn successful', token,user:{_id,email,personName,contact,branch,year,degree}})                    
    }catch(e){
        return res.json({error:"Something Went Wrong"})
    }
}
    

//patch
exports.update = async(req, res) => {
        const updates = Object.keys(req.body)
        const allowedUpdates = ['personName', 'email','contact', 'password', 'institutionName', 'degree', 'year', 'branch']
        const isValid = updates.every((update)=>{
            return allowedUpdates.includes(update)
        })
        if(!isValid){
            res.status(400).send({error: 'Invalid Updates!'})
        }
        try{    
            updates.forEach(update => {
                req.user[update] = req.body[update]
            })
            
            await req.user.save()
            const {_id,personName,email,contact,branch,year,degree} = req.user
            return res.status(200).json({user:{_id,email,personName,contact,branch,year,degree}})
    
        }
        catch(e){
            res.status(400).send(e)
        }
}

exports.logout = async( req, res ) => {
    try{
        req.user.tokens = req.user.tokens.filter((token)=>{
            return req.token!==token.token
        })
        await req.user.save()
        res.send({message: "logged out!"})
    }
    catch(e){
        res.status(500).send(e)
    }
}

exports.logoutAll = async( req, res ) => {
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({message: "logged out!"})
    }
    catch(e){
        res.status(500).send(e)
    }
}