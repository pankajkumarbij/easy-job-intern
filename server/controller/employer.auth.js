const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth_employer = require("../middleware/auth_employer");
const { JWT_SECRET } = require("../keys");
const Employer = require("../models/employer");
const {signupEmailFunc} = require("../utils/signupEmployer-email");
const Job = require("../models/Job")
const Internship = require("../models/Internship")

const fresherJob = require("../models/Freshers");
const Student = require("../models/student");
const ObjectID = require('mongodb').ObjectID;
const Company = require("../models/company");


exports.signup = async (req, res) => {
  const {
    companyName,
    personName,
    email,
    contact,
    password,
    passwordConfirmation,
  } = req.body;

  const company = await Company.find({
    companyName: companyName.toUpperCase().replace(/\s/g, ""),
  })
  if(company.length>0){
    return res.status(400).send({message: "company name already exists!"})
  }
  
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
    const employer = new Employer({
      companyName,
      personName,
      email,
      contact,
      password,
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
    /*if( savedUser.status != 'Active' ){
      return res.json({message:"Pending Account. Please Verify Your Email!"})
  }*/
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
  const allowedUpdates = ['personName', 'email','contact', 'companyName']
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
      res.status(400).send({error: 'something went wrong!'})
  }
}

exports.findEmployerById = async (req, res) => {
  try {
    const employer = await Employer.findById(req.params.id)
      .select("-password")
      .select("-tokens -confirmationCode")
    if (employer) {
      res.json(employer);
    }else{
      res.status(404).send({ message: "Employer Not Found" });
    }
  } catch (e) {
    res.status(404).send(e);
  }
};



exports.deleteEmployer = async(req, res) => {
  try{
      jobs = await Job.find({createdBy: req.user._id})
      internships = await Internship.find({createdBy: req.user._id})
      fresherJobs = await fresherJob.find({createdBy: req.user._id})
      if(jobs){
          console.log(jobs)
          jobs.forEach( async (job)=>{
              await job.remove()
          }) 
      }
      if(internships){
          console.log(internships)
          internships.forEach( async (internship)=>{
              await internship.remove()        
          })
      }
      if(fresherJobs){
          console.log(fresherJobs)
          fresherJobs.forEach( async (fresherJob)=>{
            await fresherJob.remove()  
          })
      }
      await req.user.remove()
      res.send({message: "employer profile deleted!"})
  }
  catch(e){
      res.send({message: "something went wrong!"})
  }
}


exports.viewStudent = async(req, res) => {
  try{
    if(!ObjectID.isValid(req.params.id)){
      return res
      .status(400)
      .send({message: "invalid id!"})
    }
    const student = await Student.findById(req.params.id)
    if(student.length<0 || !student){
      return res.status(400).send({message: "invalid student id!"})
    }
    const {institutionName,personName,email,branch,year,degree, location, skills, currentRole, openToRoles, workExperience, experience_noOfYears, description} = student
    return res.status(400).send({student: {institutionName,personName,email,branch,year,degree, location, skills, currentRole, openToRoles, workExperience, experience_noOfYears, description}})
  }
  catch(e){
    console.log(e)
    return res.status(400).send({message: "something went wrong!"})
  }
}

exports.addCompany = async(req, res) => {
  try{
    const employer = await Employer.findById(req.user._id) 
    
    const {companyName, companySize, overview, locations, tags, tagline, investmentStage, markets} = req.body
    console.log(employer)
    if(companyName !== employer.companyName){
      return res.status(400).send({message: "you cannot add details for this company"})
    }

    const marketsArray = markets.split(",");
    const locationsArray = locations.split(",");
    const tagsArray = tags.split(",");
    const company = new Company({
      companyName: companyName.toUpperCase().replace(/\s/g, ""),
      companySize,
      overview,
      locations: locationsArray,
      tags: tagsArray,
      tagline,
      investmentStage,
      markets: marketsArray,
      createdBy: req.user._id
    })
    await company.save()
    return res.status(200).send({message: "company details saved!"})
  }
  catch(e){
    console.log(e)
    return res.send(400).send({message: "something went wrong"})
  }
}

exports.updateCompany = async(req, res) => {
  if(!ObjectID.isValid(req.params.id)){
    return res
    .status(400)
    .send({message: "invalid id!"})  //if the id is not an object id
  }

  let company = await Company.findById(req.params.id)

  if(company.length<0 || !company){
    return res.status(400).send({message: "invalid company id!"}) //if company with that id is not present
  }

  if(company.createdBy.toString() !== req.user._id.toString()){
    return res.status(400).send({message: "you do not have edit rights!"}) //if a random person tries to update company details
  }

  const updates = Object.keys(req.body)

  const allowedUpdates = ['companyName', 'companySize', 'overview', 'locations', 'tags', 'tagline', 'investmentStage', 'markets']
  
  const isValid = updates.every((update)=>{
      return allowedUpdates.includes(update)
  })
  if(!isValid){
      return res.status(400).send({error: 'Invalid Updates!'})
  }
  if(updates.includes("companyName")){
    const existing = await Company.findOne({companyName: req.body.companyName.toUpperCase().replace(/\s/g, "")}) //if company with same name exists
    if(existing && existing._id){
      if((company._id.toString() !== existing._id.toString())){
        return res.status(400).send({message: "company name already exists!"})
      }
    }
  }
  try
  {    
    updates.forEach(async (update) => {
      if(update === 'tags' || update === 'locations' || update === 'markets'){  //converting these entries to array of strings
        company[update] = req.body[update].split(",") 

      }
      if(update === 'companyName'){   //update only if companyName is a part of req body
        
        const old = company[update]
        const changed = req.body[update].toUpperCase().replace(/\s/g, "")
        company[update] = req.body[update].toUpperCase().replace(/\s/g, "")

        const jobs = await Job.find({companyName: old})

        const internships = await Internship.find({companyName: old})

        const fresherJobs = await fresherJob.find({companyName: old})

        if(jobs || jobs.length > 0){   //changing the companyName field for all the jobs that were created

          jobs.forEach(async (job) => {  
            job.companyName = changed
            await job.save()
          })
          
        }

        if(internships || internships.length > 0){   //changing the companyName field for all the internships that were created

          internships.forEach(async (internship) => {
            internship.companyName = changed
            await internship.save()
          })
          
        }

        if(fresherJobs || fresherJobs.length > 0){   //changing the companyName field for all the fresher jobs that were created

          fresherJobs.forEach(async (fresherJob) => {
            fresherJob.companyName = changed
            await fresherJob.save()
          })

        }

        const employer = await Employer.findById(company.createdBy) //modify employer details
        employer.companyName = changed
        await employer.save()
        
      }
      if(update === 'companySize' || update === 'overview' || update === 'tagline' || update === 'investmentStage'){
        company[update] = req.body[update]
      }
        
    })
    await company.save()
    return res.status(200).send(company)
    

  }
  catch(e){
    console.log(e)
      res.status(400).send({error: 'something went werong!'})
  }
}
