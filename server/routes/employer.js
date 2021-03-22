const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken")
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"
const bcrypt = require("bcryptjs")
const {JWT_SECRET} = require('../keys');
//const email = require('../utils/email');

const Employer = require("../models/employer");

router.get('/', (req, res)=>{
    res.json({message:"employer auth"})
})

// SignUp       post      /auth/signup

router.post("/signup",(req,res)=>{
    const {companyName,personName,email,contact,password,passwordConfirmation} = req.body
    if(password !== passwordConfirmation){
        return res.json({error:"Password dosen't match"})
    }
    if(!companyName || !personName || !email || !contact || !password || !passwordConfirmation){
        return res.json({error:"Please add all fields"})
    }
    Employer.findOne({email})
    .then((savedUser)=>{
        if(savedUser){
            return res.json({error:"User already exsist"})
        }
        bcrypt.hash(password,10)
        .then(async hashedpassword => {
            const employer = new Employer({
                companyName,
                personName,
                email,
                contact,
                password:hashedpassword
            })
            //await email(name, email, mobile);
            employer.save()
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
    
    Employer.findOne({email})
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
                const {_id,personName,email,contact,companyName} = savedUser
               return res.json({token,user:{_id,personName,email,contact,companyName}})
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


module.exports = router