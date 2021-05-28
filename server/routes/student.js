const express = require("express");
const router = express.Router();
const { signup, signin, update, logout, logoutAll ,signupConfirm, deleteStudent, saveCompany } = require("../controller/student.auth");
const auth_student = require('../middleware/auth_student');

const {searchFilterInternships, bookmarkInternship, getBookmarkedInternships, searchBookmarkedInternship} = require("../controller/internships")
const {searchFilterJobs, bookmarkJob, getBookmarkedJobs, searchBookmarkedJob} = require("../controller/jobs")
const {searchFilterFreshersJobs, bookmarkFresherJob, getBookmarkedFresherJobs, searchBookmarkedFresherJob} = require("../controller/freshersjob")


const {apply, student_getPendingApplications, student_getApprovedApplications, student_getRejectedApplications} = require('../controller/applications');
const { getNotifications, getNotification } = require("../controller/student_notification");



router.post("/signup", signup);
router.post("/signin", signin);
router.patch("/update", auth_student, update);
router.get('/logout', auth_student, logout);
router.get('/logoutAll', auth_student, logoutAll);
router.get('/searchFilterInternships', auth_student, searchFilterInternships);
router.get('/searchFilterJobs', auth_student, searchFilterJobs);
router.get('/searchFilterFreshersJobs', auth_student, searchFilterFreshersJobs);
router.get('/confirm/:confirmationCode' , signupConfirm );
router.post('/bookmarkInternship/:id', auth_student, bookmarkInternship)
router.post('/bookmarkJob/:id', auth_student, bookmarkJob)
router.post('/bookmarkFresherJob/:id', auth_student, bookmarkFresherJob)
router.post('/getBookmarkedInternships', auth_student, getBookmarkedInternships)
router.post('/getBookmarkedJobs', auth_student, getBookmarkedJobs)
router.post('/getBookmarkedFresherJobs', auth_student, getBookmarkedFresherJobs)
router.delete('/deleteStudent', auth_student, deleteStudent)
router.get('/searchBookmarkedJob', auth_student, searchBookmarkedJob)
router.get('/searchBookmarkedFresherJob', auth_student, searchBookmarkedFresherJob)
router.get('/searchBookmarkedInternship', auth_student, searchBookmarkedInternship)

router.post('/apply', auth_student, apply)

router.get('/getPendingApplications', auth_student, student_getPendingApplications)
router.get('/getApprovedApplications', auth_student, student_getApprovedApplications)
router.get('/getRejectedApplications', auth_student, student_getRejectedApplications)

router.post('/saveCompany', auth_student, saveCompany)
router.get('/getNotifications', auth_student, getNotifications)
router.get('/getNotification/:id', auth_student, getNotification)

module.exports = router
