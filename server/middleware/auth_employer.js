const jwt = require("jsonwebtoken");
const Employer = require("../models/employer.js");
const { JWT_SECRET } = require("../keys");

const auth_employer = async (req, res, next) => {
  // try{
  //     // Authentication type Bearer
  //     const token = req.header('Authorization').replace('Bearer ','')
  //     console.log(token);
  //     const decoded = jwt.verify(token,JWT_SECRET)
  //     console.log(decoded);
  //     const user = await Employer.findOne({ _id : decoded._id, 'tokens.token':token})
  //     console.log(user);
  //     if(!user){
  //         throw new Error("error")
  //     }
  //     req.token = token
  //     req.user = user
  // }
  // catch(e){
  //     return res.send({error : "Please Authenticate"})
  // }
  // next()

  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      return res.status(401).json({ error: "you must be logged in" });
    }

    const { _id } = payload;
    Employer.findById(_id).then((userData) => {
      req.user = userData;
      next();
    });
  });
};

module.exports = auth_employer;
