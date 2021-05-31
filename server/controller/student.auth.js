const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const { JWT_SECRET } = require("../keys");
const auth_student = require("../middleware/auth_student.js");
const Student = require("../models/student");
const { signupEmailFunc } = require("../utils/signup-email");
const Internship = require("../models/Internship");
const Job = require("../models/Job");
const Employer = require("../models/employer");
const fresherJob = require("../models/Freshers");

exports.signup = async (req, res) => {
  const {
    institutionName,
    personName,
    email,
    contact,
    password,
    passwordConfirmation,
    branch,
    year,
    degree,
    location,
    skills,
    currentRole,
    openToRoles,
    workExperience,
    experience_noOfYears,
    description,
  } = req.body;
  if (password !== passwordConfirmation) {
    return res.json({ error: "Password dosen't match" });
  }
  if (
    !institutionName ||
    !personName ||
    !email ||
    !contact ||
    !password ||
    !passwordConfirmation ||
    !branch ||
    !year ||
    !degree ||
    !location ||
    !skills ||
    !currentRole ||
    !openToRoles ||
    !workExperience ||
    !experience_noOfYears ||
    !description
  ) {
    return res.json({ error: "Please add all fields" });
  }
  try {
    const savedUser = await Student.findOne({ email });
    if (savedUser) {
      return res.json({ error: "User already exsist" });
    }
    const user = new Student({
      institutionName,
      personName,
      email,
      contact,
      branch,
      year,
      degree,
      password,
      status: "Pending",
      savedCompanies: [],
      location,
      skills: skills.split(","),
      currentRole,
      openToRoles: openToRoles.split(","),
      workExperience,
      experience_noOfYears,
      description,
    });
    const token = await user.generateAuthToken();
    user.confirmationCode = token;
    await user.save(
      signupEmailFunc(user.personName, user.email, user.confirmationCode)
    );
    res.json({
      message: "Saved Succcessfully !! Check your email",
      user: user,
      token: token,
    });
  } catch (e) {
    console.log(e);
  }
};

exports.signupConfirm = (req, res, next) => {
  Student.findOne({ confirmationCode: req.params.confirmationCode })
    .then(async (user) => {
      if (!user) {
        return res.status(404).send({ message: "User Not found." });
      }
      user.status = "Active";
      await user.save((err) => {
        if (err) res.status(500).send({ message: err });
        return;
      });
    })
    .catch((err) => {
      console.log(err);
      return res.send(err);
    });
};

// SignIn       post      /auth/signin

exports.signin = async (req, res) => {
  let savedUser;
  try {
    if (!req.body.email || !req.body.password) {
      return res.json({ error: "Please Add Email or Password" });
    }
    try {
      savedUser = await Student.findByCredentials(
        req.body.email,
        req.body.password
      );
    } catch (e) {
      return res.json({ error: "Invalid email or password" });
    }
    /*if( savedUser.status != 'Active' ){
            return res.json({message:"Pending Account. Please Verify Your Email!"})
        }*/
    const { _id, personName, email, contact, branch, year, degree } = savedUser;
    const token = await savedUser.generateAuthToken();
    return res.status(200).json({
      message: "SignIn successful",
      token,
      user: { _id, email, personName, contact, branch, year, degree },
    });
  } catch (e) {
    return res.json({ error: "Something Went Wrong" });
  }
};

//patch
exports.update = async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = [
    "personName",
    "email",
    "contact",
    "password",
    "institutionName",
    "degree",
    "year",
    "branch",
  ];
  const isValid = updates.every((update) => {
    return allowedUpdates.includes(update);
  });
  if (!isValid) {
    res.status(400).send({ error: "Invalid Updates!" });
  }
  try {
    updates.forEach((update) => {
      req.user[update] = req.body[update];
    });

    await req.user.save();
    const { _id, personName, email, contact, branch, year, degree } = req.user;
    return res.status(200).json({
      user: { _id, email, personName, contact, branch, year, degree },
    });
  } catch (e) {
    res.status(400).send(e);
  }
};

exports.logout = async (req, res) => {
  try {
    req.user.tokens = req.user.tokens.filter((token) => {
      return req.token !== token.token;
    });
    await req.user.save();
    res.send({ message: "logged out!" });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.logoutAll = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.status(200).send({ message: "logged out!" });
  } catch (e) {
    res.status(500).send(e);
  }
};

exports.findStudentById = async (req, res) => {
  try {
    var student = await Student.findById(req.params.id)
      .select("-password")
      .select("-tokens")
      .populate("bookmarkedInternship")
      .populate("bookmarkedJob")
      .populate("bookmarkedFresherJob");
    if (!student) {
      return res.send({ message: "Student Not Found" });
    }
    return res.json(student);
  } catch (e) {
    res.status(401).send(e);
  }
};

exports.deleteStudent = async (req, res) => {
  let jobs, internships, fresherJobs;
  try {
    jobs = await Job.find({ bookmarkedBy: req.user._id });
    internships = await Internship.find({ bookmarkedBy: req.user._id });
    fresherJobs = await fresherJob.find({ bookmarkedBy: req.user._id });
    if (jobs) {
      jobs.forEach(async (job) => {
        const i = job.bookmarkedBy.indexOf(req.user._id);
        if (i < 0) {
          return res.status(200).send({ message: "something went wrong!" });
        }
        job.bookmarkedBy.splice(i, 1);
        await job.save();
      });
    }
    if (internships) {
      internships.forEach(async (internship) => {
        const i = internship.bookmarkedBy.indexOf(req.user._id);
        if (i < 0) {
          return res.status(200).send({ message: "something went wrong!" });
        }
        internship.bookmarkedBy.splice(i, 1);
        await internship.save();
      });
    }
    if (fresherJobs) {
      fresherJobs.forEach(async (fresherJob) => {
        const i = fresherJob.bookmarkedBy.indexOf(req.user._id);
        if (i < 0) {
          return res.status(200).send({ message: "something went wrong!" });
        }
        fresherJob.bookmarkedBy.splice(i, 1);
        await fresherJob.save();
      });
    }
    await req.user.remove();
    res.send({ message: "student profile deleted!" });
  } catch (e) {
    res.send({ message: "something went wrong!" });
  }
};

exports.saveCompany = async (req, res) => {
  try {
    const employers = await Employer.find({});
    const companies = [];
    const user = await Student.findById(req.user._id);
    employers.forEach((employer) => {
      if (
        !companies.includes(
          employer.companyName.toUpperCase().replace(/\s/g, "")
        )
      ) {
        companies.push(employer.companyName.toUpperCase().replace(/\s/g, ""));
      }
    });

    //console.log(companies)
    if (
      !companies.includes(req.body.companyName.toUpperCase().replace(/\s/g, ""))
    ) {
      return res.status(400).send({ message: "invalid company name!" });
    }

    if (
      !user.savedCompanies.includes(
        req.body.companyName.toUpperCase().replace(/\s/g, "")
      )
    ) {
      //no duplicate entries
      user.savedCompanies.push(
        req.body.companyName.toUpperCase().replace(/\s/g, "")
      ); // save strings in a specific way do uniformity is maintained
    }
    await user.save();
    return res.status(200).send({ message: "saved!" });
  } catch (e) {
    console.log(e);
    res.status(400).send({ message: "something went wrong!" });
  }
};
