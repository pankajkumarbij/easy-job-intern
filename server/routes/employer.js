const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
} = require("../controller/employer.auth");
const { createFreshersJob } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues } = require("../controller/internships");
const { createJob, updateJob } = require("../controller/jobs");
const auth_employer = require("../middleware/auth_employer");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", auth_employer, logout);
router.get("/logoutAll", auth_employer, logoutAll);

router.post("/create-internship", auth_employer, createInternship);
router.post("/create-job", auth_employer, createJob);
router.post("/create-fresherjob", auth_employer, createFreshersJob);

router.patch("/update-internship", auth_employer, updateInternship);
router.get("/get-internship/:postId", auth_employer, getInternshipValues);
router.patch("/update-job", auth_employer, updateJob);







module.exports = router;
