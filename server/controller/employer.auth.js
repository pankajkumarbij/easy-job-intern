const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth_employer = require("../middleware/auth_employer");
const { JWT_SECRET } = require("../keys");
const Employer = require("../models/employer");

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
    return res.json({ error: "Password dosen't match" });
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
  try{
    const savedUser = await Employer.findOne({email})
    if(savedUser){
        return res.json({error:"User already exsist"})
    }
    const user = new Employer({
      companyName,
      personName,
      email,
      contact,
      password,
    })
    const token = await user.generateAuthToken()
    await user.save()
    
    res.json({message:"Saved Succcessfully",user:user, token:token})
  }
  catch(e){
      console.log(e)
  }
};

// SignIn       post      /auth/signin

exports.signin = async(req, res) => {
  try{
    if(!req.body.email || !req.body.password){
        return res.json({error:"Please Add Email or Password"})
    }
    try{
        savedUser = await Employer.findByCredentials(req.body.email, req.body.password)
    }
    catch(e){
        return res.json({error:"Invalid email or password"})
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
