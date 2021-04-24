const express = require("express");
const router = express.Router();
const { signup, signin, update, logout, logoutAll , signupConfirm } = require("../controller/student.auth");
const auth_student = require('../middleware/auth_student');
const {searchFilterInternships, bookmarkInternship} = require("../controller/internships")
const {searchFilterJobs} = require("../controller/jobs")
const {searchFilterFreshersJobs} = require("../controller/freshersjob")


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
module.exports = router