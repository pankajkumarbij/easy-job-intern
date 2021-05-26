const express = require("express");
const router = express.Router();
const {
  getAllInternships,
  getInternshipsByLocation,
  getInternshipsByIndustry,
  getInternshipsByStream,
  getInternhsipsByLocations,
  getInternhsipsByStreams,
  getInternhsipsByIndustries,
} = require("../controller/internships");
const { getAllJobs, getJobsByLocations, getJobsByStreams, getJobsByIndustries } = require("../controller/jobs");
const { getAllFreshersJobs, getFreshersJobsByLocations, getFreshersJobsByStreams, getFreshersJobsByIndustries, getFreshersJobsByCompanyName } = require("../controller/freshersjob");
const auth_employer = require("../middleware/auth_employer");

router.get("/all-internships", getAllInternships);
router.get("/all-jobs", getAllJobs);
router.get("/all-freshersjobs", getAllFreshersJobs);

router.get("/location-internship/:location", getInternshipsByLocation);
router.get("/industry-internship/:industry", getInternshipsByIndustry);
router.get("/stream-internship/:stream", getInternshipsByStream);

router.get("/internship/location", getInternhsipsByLocations);
router.get("/internship/stream", getInternhsipsByStreams);
router.get("/internship/industry", getInternhsipsByIndustries);

router.get("/job/location", getJobsByLocations);
router.get("/job/stream", getJobsByStreams);
router.get("/job/industry", getJobsByIndustries);

router.get("/freshersjob/location", getFreshersJobsByLocations);
router.get("/freshersjob/stream", getFreshersJobsByStreams);
router.get("/freshersjob/industry", getFreshersJobsByIndustries);
router.get("/freshersjob/companyName/:companyName", getFreshersJobsByCompanyName);


module.exports = router;
