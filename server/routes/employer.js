const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
  signupConfirm,
  update,
  deleteEmployer
} = require("../controller/employer.auth");

const { createFreshersJob, updateFreshersJob, deleteFreshersJob, searchFresherJob, getFresherJobValues } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues, deleteInternship, searchInternship } = require("../controller/internships");
const { createJob, updateJob, deleteJob, searchJob, getJobValues } = require("../controller/jobs");

const {approve, reject, employer_getPendingJobs, employer_getPendingFresherJobs} = require("../controller/applications")
const auth_employer = require("../middleware/auth_employer");

const {employer_getPendingInternships} = require('../controller/applications');
const {getNotifications, getNotification} = require("../controller/employer_notification")



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
router.get("/approve/:id", auth_employer, approve)
router.get("/reject/:id", auth_employer, reject)

router.get('/searchInternship', auth_employer, searchInternship)


router.get('/searchJob', auth_employer, searchJob)
router.get('/searchFresherJob', auth_employer, searchFresherJob)
router.get('/confirm/:confirmationCode' , signupConfirm );
router.delete('/deleteEmployer', auth_employer, deleteEmployer)

router.get('/getPendingJobs', auth_employer, employer_getPendingJobs)
router.get('/getPendingFresherJobs', auth_employer, employer_getPendingFresherJobs)
router.get('/getPendingInternships', auth_employer, employer_getPendingInternships)


router.get('/getNotification/:id', auth_employer, getNotification)

router.get('/getNotifications', auth_employer, getNotifications)


module.exports = router;
