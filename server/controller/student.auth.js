const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const {JWT_SECRET} = require('../keys');
const auth_student = require('../middleware/auth_student.js');
const Student = require("../models/student");
const {signupEmailFunc} = require("../utils/signup-email");

exports.signup =  (req, res) => {
    const {institutionName,personName,email,contact,password,passwordConfirmation,branch,year,degree} = req.body
    if(password !== passwordConfirmation){
        return res.json({error:"Password dosen't match"})
    }
    if(!institutionName || !personName || !email || !contact || !password || !passwordConfirmation || !branch || !year || !degree  ){
        return res.json({error:"Please add all fields"});
    }
   Student.findOne({email})
    .then(async (savedUser)=>{
        if(savedUser){
            return res.json({error:"User already exsist"})
        }
        const token =  await jwt.sign({email: email}, JWT_SECRET );
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
                password:hashedpassword ,
                status : 'Pending',
                confirmationCode : token
            })
            await student.save(
                signupEmailFunc(student.personName ,student.email , student.confirmationCode   )                
            )
            .then( user=>{
                res.json({message:"Saved Succcessfully !! Check your email",user:user})
            }).catch(err=>{
                console.log(err);
            })
        })
      
    })
}
  
exports.signupConfirm = (req,res,next) => {
    Student.findOne( {confirmationCode : req.params.confirmationCode} )
        .then( async (user) => {
           if(!user)
           {
            return res.status(404).send({ message: "User Not found." });
           }
           user.status = 'Active';
         await  user.save((err) => {
               if(err)  res.status(500).send({ message: err });
               return ;
           } )
        } )
        .catch(
            (err) => {
                console.log(err);
                return res.send(err);
            }
        )
}

// SignIn       post      /auth/signin


exports.signin = (req, res) => {
    const {email,password} = req.body;
    if(!email || !password){
        return res.json({error:"Please Add Email or Password"})
    }
    Student.findOne({email})
    .then(savedUser => {
        if(!savedUser){
            return res.json({error:"Invalid email or password"})
        }
        else if( savedUser.status != 'Active' ){
            return res.json({error:"Pending Account. Please Verify Your Email!"})
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