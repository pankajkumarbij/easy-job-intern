const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
const bcrypt = require("bcryptjs")
const {JWT_SECRET} = require('../keys');
const auth_student = require('../middleware/auth_student.js');

//const email = require('../utils/email');

const Student = require("../models/student");

router.get('/', (req, res)=>{
    res.json({message:"student auth"})
})

// SignUp       post      /auth/signup

router.post("/signup",(req,res)=>{
    const {institutionName,personName,email,contact,password,passwordConfirmation,branch,year,degree} = req.body
    if(password !== passwordConfirmation){
        return res.json({error:"Password dosen't match"})
    }
    if(!institutionName || !personName || !email || !contact || !password || !passwordConfirmation || !branch || !year || !degree  ){
        return res.json({error:"Please add all fields"});
    }
   Student.findOne({email})
    .then((savedUser)=>{
        if(savedUser){
            return res.json({error:"User already exsist"})
        }
        bcrypt.hash(password,10)
        .then(async hashedpassword => {
            const student = new Student({
                institutionName,
                personName,
                email,
                contact,
                branch,
                year,
                degree,
                password:hashedpassword
            })
            //await email(name, email, mobile);
            student.save()
            .then(user=>{
                res.json({message:"Saved Succcessfully",user:user})
            }).catch(err=>{
                console.log(err);
            })
        })
      
    })
})

// SignIn       post      /auth/signin


router.post('/signin',(req,res)=>{
    const {email,password} = req.body;
    if(!email || !password){
        return res.json({error:"Please Add Email or Password"})
    }
    Student.findOne({email})
    .then(savedUser => {
        if(!savedUser){
            return res.json({error:"Invalid email or password"})
        }
        else{
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"SignIn successfull"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,personName,email,contact,branch,year,degree} = savedUser
                savedUser.tokens = savedUser.tokens.concat({token:token})
                savedUser.save()
               return res.status(200).json({token,user:{_id,email,personName,contact,branch,year,degree}})
            }else{
                return res.json({error:"Invalid Email or Password"})
            }
        }).catch(err=>{
            return res.json({error:"Something Went Wrong"})
        })
    }
    }).
    catch(err=>{
        return res.json({error:"Something Went Wrong"})
    })

})

//patch
router.patch('/update', auth_student, async(req, res)=>{
    const updates = Object.keys(req.body)
    const allowedUpdates = ['personName', 'email','contact', 'password', 'institutionName', 'degree', 'year', 'branch']
    const isValid = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValid){
        res.status(400).send({error: 'Invalid Updates!'})
    }
    try{
        if (updates.includes("password")){
            req.body.password = await bcrypt.hash(req.body.password, 10)
        }

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

})

//logout
router.get('/logout', auth_student , async(req, res)=>{
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
})


//logoutAll
router.get('/logoutAll', auth_student, async(req, res)=>{
    try{
        req.user.tokens = []
        await req.user.save()
        res.status(200).send({message: "logged out!"})
    }
    catch(e){
        res.status(500).send(e)
    }

})


module.exports = router