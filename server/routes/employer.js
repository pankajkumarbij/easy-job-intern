const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
} = require("../controller/employer.auth");
const { createInternship, getAllInternships } = require("../controller/internships");
const { createJob, getAllJobs } = require("../controller/jobs");
const auth_employer = require("../middleware/auth_employer");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", auth_employer, logout);
router.get("/logoutAll", auth_employer, logoutAll);
router.post("/create-internship", auth_employer, createInternship);
router.post("/create-job", auth_employer, createJob);
router.get("/all-internships", getAllInternships);
router.get("/all-jobs", getAllJobs);



module.exports = router;
