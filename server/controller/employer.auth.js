const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const auth_employer = require("../middleware/auth_employer");
const { JWT_SECRET } = require("../keys");
const Employer = require("../models/employer");
const {signupEmailFunc} = require("../utils/signupEmployer-email");

exports.signup = (req, res) => {
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

exports.signin = (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({ error: "Please Add Email or Password" });
  }

  Employer.findOne({ email })
    .then((savedUser) => {
      if (!savedUser) {
        return res.json({ error: "Invalid email or password" });
      } 
      else if( savedUser.status != 'Active' ){
        return res.json({error:"Pending Account. Please Verify Your Email!"})
    } else {
        bcrypt
          .compare(password, savedUser.password)
          .then((doMatch) => {
            if (doMatch) {
              //return res.json({message:"SignIn successfull"})
              const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
              const {
                _id,
                personName,
                email,
                contact,
                companyName,
              } = savedUser;
              return res.json({
                token,
                user: { _id, personName, email, contact, companyName },
              });
            } else {
              return res.json({ error: "Invalid Email or Password" });
            }
          })
          .catch((err) => {
            return res.json({ error: "Something Went Wrong" });
          });
      }
    })
    .catch((err) => {
      return res.json({ error: "Something Went Wrong" });
    });
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
