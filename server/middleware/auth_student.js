const jwt = require("jsonwebtoken");
const Student = require("../models/student.js");
const { JWT_SECRET } = require("../keys");

const auth_student = async (req, res, next) => {
  //   try {
  //     // Authentication type Bearer
  //     const token = req.header("Authorization").replace("Bearer ", "");
  //     const decoded = jwt.verify(token, JWT_SECRET);
  //     const user = await Student.findOne({
  //       _id: decoded._id,
  //       "tokens.token": token,
  //     });
  //     if (!user) {
  //         console.log("error");
  //       throw new Error("error");
  //     }
  //     req.token = token;
  //     req.user = user;
  //   } catch (e) {
  //       console.log(e);
  //     return res.send({ error: "Please Authenticate" });
  //   }
  //   next();

  const { authorization } = req.headers;
  if (!authorization) {
    res.status(401).json({ error: "You must be logged in" });
  }
  const token = authorization.replace("Bearer ", "");
  jwt.verify(token, JWT_SECRET, (err, payload) => {
    if (err) {
      console.log(err);
      return res.status(401).json({ error: "you must be logged in" });
    }

    const { _id } = payload;
    console.log(_id);
    Student.findById(_id).then((userData) => {
      console.log(userData);
      req.user = userData;
      next();
    });
  });
};

module.exports = auth_student;
