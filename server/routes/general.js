const express = require("express");
const router = express.Router();
const { getAllInternships } = require("../controller/internships");
const { getAllJobs } = require("../controller/jobs");
const { getAllFreshersJobs } = require("../controller/freshersjob");
const auth_employer = require("../middleware/auth_employer");

router.get("/all-internships", getAllInternships);
router.get("/all-jobs", getAllJobs);
router.get("/all-freshersjobs", getAllFreshersJobs);

module.exports = router;