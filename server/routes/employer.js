const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
  update
} = require("../controller/employer.auth");
const { createFreshersJob } = require("../controller/freshersjob");
const { createInternship } = require("../controller/internships");
const { createJob } = require("../controller/jobs");
const auth_employer = require("../middleware/auth_employer");

router.post("/signup", signup);
router.post("/signin", signin);
router.get("/logout", auth_employer, logout);
router.get("/logoutAll", auth_employer, logoutAll);
router.post("/create-internship", auth_employer, createInternship);
router.post("/create-job", auth_employer, createJob);
router.post("/create-fresherjob", auth_employer, createFreshersJob);
router.patch("/update", auth_employer, update);



module.exports = router;
