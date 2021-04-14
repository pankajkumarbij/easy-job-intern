const express = require("express");
const router = express.Router();
const { signup, signin, update, logout, logoutAll } = require("../controller/student.auth");
const auth_student = require('../middleware/auth_student');


router.post("/signup", signup);
router.post("/signin", signin);
router.patch("/update", auth_student, update);
router.get('/logout', auth_student, logout);
router.get('/logoutAll', auth_student, logoutAll);


module.exports = router