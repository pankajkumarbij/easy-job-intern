const Job = require("../models/Job");

exports.createJob = (req, res) => {
  const {
    companyName,
    description,
    location,
    salary,
    techstack,
    lastDate,
    startDate,
    experience,
    role,
    vacancies,
    stream,
    industry,
  } = req.body;
  const user = req.user;

  if (
    !companyName ||
    !description ||
    !location ||
    !salary ||
    !techstack ||
    !lastDate ||
    !startDate ||
    !experience ||
    !role ||
    !stream ||
    !industry ||
    !vacancies
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
    startDate,
    experience,
    techstack: techStackArray,
    createdBy: user,
    role,
    vacancies,
    stream,
    industry,
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
      res.json({ jobs: jobs });
    })
    .catch((err) => {
      return res.json({ error: "Something Went Wrong" });
    });
};

exports.updateJob = (req, res) => {
  const {
    postId,
    description,
    location,
    salary,
    techstack,
    duration,
    lastDate,
    startDate,
    experience,
    role,
    vacancies,
    stream,
    industry,
  } = req.body;

  Job.findById(postId)
    .then((job) => {
      // console.log(job);
      if (description) {
        job.description = description;
      }
      if (location) {
        job.location = location;
      }
      if (salary) {
        job.salary = salary;
      }
      if (techstack) {
        const techStackArray = techstack.split(",");
        job.techstack = techStackArray;
      }
      if (duration) {
        job.duration = duration;
      }
      if (lastDate) {
        job.lastDate = lastDate;
      }
      if (startDate) {
        job.startDate = startDate;
      }
      if (experience) {
        job.experience = experience;
      }
      if (role) {
        job.role = role;
      }
      if (vacancies) {
        job.vacancies = vacancies;
      }
      if (stream) {
        job.stream = stream;
      }
      if (industry) {
        job.industry = industry;
      }

      job
        .save()
        .then((intern) => {
          res.json({ message: "Internship updated sucessfully!" });
        })
        .catch((err) => {
          console.log(err);
          res.status(500).json({ error: "Something went wrong!" });
        });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};

exports.deleteJob = (req, res) => {
  const { postId } = req.body;

  Job.findByIdAndDelete(postId)
    .then((deletedPost) => {
      // console.log(deletedPost);
      res.json({ message: "Job deleted successfully!", jobs: deletedPost });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};

exports.getJobValues = (req, res) => {
  const { postId } = req.params;
  Job.findById(postId)
    .then((job) => {
      if (!job) {
        return res.status(400).json({ error: "Job does not exists" });
      }
      res.json({ job: job });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};

exports.searchJob = async (req, res) => {
  const match = { createdBy: req.user._id };
  if (req.query.id) {
    match._id = req.query.id;
  }
  if (req.query.techstack) {
    match.techstack = { $in: req.query.techstack };
  }
  if (req.query.salary) {
    match.salary = req.query.salary;
  }
  if (req.query.startDate) {
    const date = new Date(req.query.startDate).toISOString();
    match.startDate = date;
  }
  if (req.query.role) {
    match.role = req.query.role;
  }
  if (req.query.vacancies) {
    match.vacancies = req.query.vacancies;
  }
  const jobs = await Job.find(match)
    .populate("createdBy", "_id personName")
    .sort("-createdAt");
  try {
    if (jobs.length === 0) {
      return res.status(200).send({ message: "No jobs found" });
    }
    res.status(200).send(jobs);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
};

exports.searchFilterJobs = async (req, res) => {
  const match = {};
  if (req.query.location) {
    match.location = req.query.location;
  }
  if (req.query.experience) {
    match.experience = req.query.experience;
  }
  if (req.query.companyName) {
    match.companyName = req.query.companyName;
  }
  if (req.query.techstack) {
    match.techstack = { $in: req.query.techstack };
  }
  if (req.query.startDate) {
    const date = new Date(req.query.startDate).toISOString();
    match.startDate = date;
  }
  if (req.query.role) {
    match.role = req.query.role;
  }
  if (req.query.vacancies) {
    match.vacancies = req.query.vacancies;
  }
  const jobs = await Job.find(match);
  try {
    res.status(200).send({ jobs: jobs });
  } catch (e) {
    return res.status(400).send("something went wrong");
  }
};

exports.bookmarkJob = async (req, res) => {
  try {
    const bool = req.body.bookmark === "true";
    const job = await Job.findById(req.params.id);
    if (bool) {
      if (!job.bookmarkedBy.includes(req.user._id)) {
        //making sure that a user doesn't get appended to the list more than once
        job.bookmarkedBy.push(req.user._id);
        await job.save();
      }
      return res.status(200).send({ message: "bookmarked!" });
    } else {
      const i = job.bookmarkedBy.indexOf(req.user._id);
      if (i < 0) {
        //if user was not present in the bookmarkedBy list of job
        return res.status(200).send({ message: "job not found!" });
      }
      job.bookmarkedBy.splice(i, 1);
      await job.save();
      return res.status(200).send({
        message: "the job is not included in your bookmarked list anymore!",
      });
    }
  } catch (e) {
    return res.status(400).send({ message: "something went wrong" });
  }
};

exports.getBookmarkedJobs = async (req, res) => {
  try {
    const jobs = await Job.find({ bookmarkedBy: req.user._id });
    const _jobs = [];
    jobs.forEach((job) => {
      const {
        techstack,
        _id,
        companyName,
        description,
        location,
        salary,
        role,
        vacancies,
        startDate,
        lastDate,
        createdBy,
      } = job;
      const obj = {
        techstack,
        _id,
        companyName,
        description,
        location,
        salary,
        role,
        vacancies,
        startDate,
        lastDate,
        createdBy,
      };
      _jobs.push(obj);
    });
    return res.status(200).send(_jobs);
  } catch (e) {
    res.status(400).send({ message: "something went wrong!" });
  }
};


exports.searchBookmarkedJob = async (req, res) => {
  const match = {};
  match.bookmarkedBy = req.user._id;
  if (req.query.techstack) {
    match.techstack = { $in: req.query.techstack };
  }
  if (req.query.duration) {
    match.duration = req.query.duration;
  }
  if (req.query.salary) {
    const date = new Date(req.query.startDate).toISOString();
    match.startDate = date;
  }
  if(req.query.role){
    match.role = req.query.role 
  }
  if(req.query.vacancies){
    match.vacancies = req.query.vacancies 
  }
  
  try{
    const jobs = await Job.find(match).populate("createdBy", "_id personName").sort("-createdAt")
    if(jobs.length===0){
      return res.status(200).send({message: "No jobs found"})
    }
    res.status(200).send(jobs);
    } catch (e) {
    res.status(400).send({message:"Something went wrong"});
  }
};

exports.getJobsByLocations = (req, res) => {
  Job.aggregate([
    {
      $group: {
        _id: "$location",
        jobs: { $push: "$$ROOT" },
      },
    },
    {
      $sort: { location: 1, createdAt: -1 },
    },
  ]).then((jobs) => {
    console.log(jobs);
    res.json({ jobs: jobs });
  });
};

exports.getJobsByStreams = (req, res) => {
  Job.aggregate([
    {
      $group: {
        _id: "$stream",
        jobs: { $push: "$$ROOT" },
      },
    },
    {
      $sort: { stream: 1, createdAt: -1 },
    },
  ]).then((jobs) => {
    console.log(jobs);
    res.json({ jobs: jobs });
  });
};

exports.getJobsByIndustries = (req, res) => {
  Job.aggregate([
    {
      $group: {
        _id: "$industry",
        jobs: { $push: "$$ROOT" },
      },
    },
    {
      $sort: { industry: 1, createdAt: -1 },
    },
  ]).then((jobs) => {
    console.log(jobs);
    res.json({ jobs: jobs });
  });
};
