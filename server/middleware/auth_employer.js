const jwt = require("jsonwebtoken");
const Employer = require("../models/employer.js");
const { JWT_SECRET } = require("../keys");

const auth_employer = async (req, res, next) => {
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
