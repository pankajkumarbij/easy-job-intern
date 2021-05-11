const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth_employer = require("../middleware/auth_employer");
const { JWT_SECRET } = require("../keys");
const Employer = require("../models/employer");
const {signupEmailFunc} = require("../utils/signupEmployer-email");

exports.signup = async (req, res) => {
  const {
    companyName,
    personName,
    email,
    contact,
    password,
    passwordConfirmation,
  } = req.body;
  if (password !== passwordConfirmation) {
    return res.json({ error: "passwordConfirmation field is missing or Password dosen't match" });
  }
  if (
    !companyName ||
    !personName ||
    !email ||
    !contact ||
    !password ||
    !passwordConfirmation
  ) {
    return res.json({ error: "Please add all fields" });
  }
  Employer.findOne({ email }).then( async (savedUser) => {
    if (savedUser) {
      return res.json({ message: "User already exist" });
    }
    const token =  await jwt.sign({email: email}, JWT_SECRET );
    bcrypt.hash(password, 10).then(async (hashedpassword) => {
      const employer = new Employer({
        companyName,
        personName,
        email,
        contact,
        password: hashedpassword,
        status : 'Pending',
        confirmationCode : token
      });
      //await email(name, email, mobile);
     await employer
        .save(signupEmailFunc(employer.personName ,employer.email , employer.confirmationCode   ) )
        .then( user=>{
          res.json({message:"Saved Succcessfully !! Check your email",user:user})
      })
        .catch((err) => {
          console.log(err);
        });
    });
  });
};

exports.signupConfirm = (req,res,next) => {
  Employer.findOne( {confirmationCode : req.params.confirmationCode} )
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

exports.signin = async(req, res) => {
  try{
    if(!req.body.email || !req.body.password){
        return res.json({error:"Please Add Email or Password"})
    }
    let savedUser;
    try{
        savedUser = await Employer.findByCredentials(req.body.email, req.body.password)
    }
    catch(e){
        return res.json({error:"Invalid email or password"})
    }
    if( savedUser.status != 'Active' ){
      return res.json({message:"Pending Account. Please Verify Your Email!"})
  }
    const { _id, personName, email, contact, companyName} = savedUser
    const token = await savedUser.generateAuthToken()
    return res.status(200).json( {token,user:{ _id, personName, email, contact, companyName}})                    
  } catch(e){
      return res.json({error:"Something Went Wrong"})
  }

};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return req.token !== token.token;
    });
    await req.user.save();
    res.send({ message: "logged out!" });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send({ message: "logged out!" });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.update = async(req, res) => {
  const updates = Object.keys(req.body)
  const allowedUpdates = ['personName', 'email','contact', 'password', 'companyName']
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
      const {_id, personName, email, contact, companyName} = req.user
      return res.status(200).json({user:{_id, personName, email, contact, companyName}})

  }
  catch(e){
      res.status(400).send({error: 'something went werong!'})
  }
}
