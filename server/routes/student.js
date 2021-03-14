const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken')
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
const bcrypt = require("bcryptjs")
const {JWT_SECRET} = require('../keys');
//const email = require('../utils/email');

const Student = require("../models/student");

router.get('/', (req, res)=>{
    res.json({message:"student auth"})
})

// SignUp       post      /auth/signup

router.post("/signup",(req,res)=>{
    const {name, email, password, confirmPassword,  mobile} = req.body
    if(password !== confirmPassword){
        return res.status(422).json({error:"Password dosen't match"})
    }
    if(!name || !email || !password || !confirmPassword ){
        return res.status(422).json({error:"Please add all fields"});
    }
   Student.findOne({email})
    .then((savedUser)=>{
        if(savedUser){
            return res.status(422).json({error:"User already exsist"})
        }
        bcrypt.hash(password,10)
        .then(async hashedpassword => {
            const student = new Student({
                name,
                email,
                mobile,
                password:hashedpassword
            })
            //await email(name, email, mobile);
            student.save()
            .then(user=>{
                res.json({message:"Saved Succcessfully"})
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
        return res.status(422).json({error:"Please Add Email or Password"})
    }
    Student.findOne({email})
    .then(savedUser => {
        if(!savedUser){
            return res.status(422).json({error:"Invalid email or password"})
        }
        bcrypt.compare(password,savedUser.password)
        .then(doMatch=>{
            if(doMatch){
                // res.json({message:"SignIn successfull"})
                const token = jwt.sign({_id:savedUser._id},JWT_SECRET)
                const {_id,name,email,mobile} = savedUser
                res.json({token,user:{_id,email,name,mobile}})
            }else{
                return res.status(422).json({error:"Invalid Email or Password"})
            }
        }).catch(err=>{
            console.log(err);
        })
    }).
    catch(err=>{
        console.log(err);
    })
})


module.exports = router