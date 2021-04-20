const express = require("express");
const router = express.Router();
const { signup, signin, update, logout, logoutAll , signupConfirm } = require("../controller/student.auth");
const auth_student = require('../middleware/auth_student');

router.post("/signup", signup);
router.post("/signin", signin);
router.post("update", update);
router.get('/logout', auth_student, logout);
router.get('/logoutAll', auth_student, logoutAll);
router.get('/confirm/:confirmationCode' , signupConfirm );

module.exports = router