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
  getInternshipsByCompanyName,
} = require("../controller/internships");
const { getAllJobs, getJobsByLocations, getJobsByStreams, getJobsByIndustries, getJobsByCompanyName } = require("../controller/jobs");
const { getAllFreshersJobs, getFreshersJobsByLocations, getFreshersJobsByStreams, getFreshersJobsByIndustries } = require("../controller/freshersjob");
const auth_employer = require("../middleware/auth_employer");

router.get("/all-internships", getAllInternships);
router.get("/all-jobs", getAllJobs);
router.get("/all-freshersjobs", getAllFreshersJobs);

router.get("/location-internship/:location", getInternshipsByLocation);
router.get("/industry-internship/:industry", getInternshipsByIndustry);
router.get("/stream-internship/:stream", getInternshipsByStream);
router.get("/companyName-internship/:companyName", getInternshipsByCompanyName);

router.get("/internship/location", getInternhsipsByLocations);
router.get("/internship/stream", getInternhsipsByStreams);
router.get("/internship/industry", getInternhsipsByIndustries);

router.get("/job/location", getJobsByLocations);
router.get("/job/stream", getJobsByStreams);
router.get("/job/industry", getJobsByIndustries);
router.get("/job/companyName/:companyName", getJobsByCompanyName);

router.get("/freshersjob/location", getFreshersJobsByLocations);
router.get("/freshersjob/stream", getFreshersJobsByStreams);
router.get("/freshersjob/industry", getFreshersJobsByIndustries);



module.exports = router;
