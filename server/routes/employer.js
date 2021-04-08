const express = require("express");
const { createInternship, createJob } = require("../controller/employeeAccess");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
} = require("../controller/employer.auth");
const auth_employer = require("../middleware/auth_employer");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", auth_employer, logout);
router.get("/logoutAll", auth_employer, logoutAll);
router.post("/create-internship", auth_employer, createInternship);
router.post("/create-job", auth_employer, createJob);



module.exports = router;
