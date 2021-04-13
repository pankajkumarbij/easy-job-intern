const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  logout,
  logoutAll,
  update
} = require("../controller/employer.auth");
const { createFreshersJob, updateFreshersJob } = require("../controller/freshersjob");
const { createInternship, updateInternship, getInternshipValues, deleteInternship } = require("../controller/internships");
const { createJob, updateJob, deleteJob } = require("../controller/jobs");
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

router.delete("/delete-internship", auth_employer, deleteInternship);
router.delete("/delete-job", auth_employer, deleteJob);








module.exports = router;
