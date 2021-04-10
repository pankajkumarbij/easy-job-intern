const express = require("express");
const router = express.Router();
const { getAllInternships } = require("../controller/internships");
const { getAllJobs } = require("../controller/jobs");
const auth_employer = require("../middleware/auth_employer");

router.get("/all-internships", getAllInternships);
router.get("/all-jobs", getAllJobs);

module.exports = router;