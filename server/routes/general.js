const express = require("express");
const router = express.Router();
const {
  getAllInternships,
  getInternshipsByLocation,
  getInternshipsByIndustry,
  getInternshipsByStream,
  getInternhsipsByLocations,
  getInternhsipsByStreams,
} = require("../controller/internships");
const { getAllJobs } = require("../controller/jobs");
const { getAllFreshersJobs } = require("../controller/freshersjob");
const auth_employer = require("../middleware/auth_employer");

router.get("/all-internships", getAllInternships);
router.get("/all-jobs", getAllJobs);
router.get("/all-freshersjobs", getAllFreshersJobs);

router.get("/location-internship/:location", getInternshipsByLocation);
router.get("/industry-internship/:industry", getInternshipsByIndustry);
router.get("/stream-internship/:stream", getInternshipsByStream);

router.get("/internship/location", getInternhsipsByLocations);
router.get("/internship/stream", getInternhsipsByStreams);

module.exports = router;
