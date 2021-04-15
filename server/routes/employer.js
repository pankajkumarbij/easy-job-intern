const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
  update
} = require("../controller/employer.auth");
<<<<<<< HEAD
<<<<<<< HEAD
const { createFreshersJob, updateFreshersJob, deleteFreshersJob, getFresherJobValues } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues, deleteInternship } = require("../controller/internships");
const { createJob, updateJob, deleteJob, getJobValues } = require("../controller/jobs");
=======

const { createFreshersJob, updateFreshersJob, deleteFreshersJob, searchFresherJob } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues, deleteInternship, searchInternship } = require("../controller/internships");
const { createJob, updateJob, deleteJob, searchJob } = require("../controller/jobs");
>>>>>>> 9d7130a758c8443d143ab91595d52dc16c381bb7
=======

const { createFreshersJob, updateFreshersJob, deleteFreshersJob, getFresherJobValues } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues, deleteInternship } = require("../controller/internships");
const { createJob, updateJob, deleteJob, getJobValues } = require("../controller/jobs");


const { createFreshersJob, updateFreshersJob, deleteFreshersJob, searchFresherJob } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues, deleteInternship, searchInternship } = require("../controller/internships");
const { createJob, updateJob, deleteJob, searchJob } = require("../controller/jobs");

>>>>>>> c15d7de6120046cddf07d2d67c8caaa72c238ccf
const auth_employer = require("../middleware/auth_employer");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", auth_employer, logout);
router.get("/logoutAll", auth_employer, logoutAll);

router.post("/create-internship", auth_employer, createInternship);
router.post("/create-job", auth_employer, createJob);
router.post("/create-fresherjob", auth_employer, createFreshersJob);
router.patch("/update", auth_employer, update);

router.patch("/update-internship", auth_employer, updateInternship);
router.get("/get-internship/:postId", auth_employer, getInternshipValues);
router.patch("/update-job", auth_employer, updateJob);
router.patch("/update-fresherjob", auth_employer, updateFreshersJob);
router.get("/get-job/:postId", auth_employer, getJobValues);
router.get("/get-freshersjob/:postId", auth_employer, getFresherJobValues);

router.delete("/delete-internship", auth_employer, deleteInternship);
router.delete("/delete-job", auth_employer, deleteJob);
router.delete("/delete-freshersjob", auth_employer, deleteFreshersJob);

router.get('/searchInternship', auth_employer, searchInternship)



router.get('/searchJob', auth_employer, searchJob)
router.get('/searchFresherJob', auth_employer, searchFresherJob)




module.exports = router;
