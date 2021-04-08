const Job = require("../models/Job");

exports.createJob = (req, res) => {
  const {
    companyName,
    description,
    location,
    salary,
    techstack,
    lastDate,
  } = req.body;
  const user = req.user;

  if (
    !companyName ||
    !description ||
    !location ||
    !salary ||
    !techstack ||
    !lastDate
  ) {
    return res.json({ error: "Please add all fields" });
  }

  // let techStackArray = new Array();
  const techStackArray = techstack.split(",");
  // console.log(techStackArray);

  const job = new Job({
    companyName,
    description,
    location,
    salary,
    lastDate,
    techstack: techStackArray,
    createdBy: user,
  });

  // console.log(internship);

  job
    .save()
    .then((job) => {
      res.json({ message: "Saved Succcessfully" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ error: "Something Went Wrong" });
    });
};

exports.getAllJobs = (req, res) => {
  Job.find()
    .populate("createdBy", "_id personName")
    .sort("-createdAt")
    .then((jobs) => {
      res.json(jobs);
    })
    .catch((err) => {
      return res.json({ error: "Something Went Wrong" });
    });
};
