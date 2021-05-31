const Freshers = require("../models/Freshers");
const Student = require("../models/student");
const StudentNotification = require("../models/student_notification");

exports.createFreshersJob = async (req, res) => {
  const {
    companyName,
    description,
    location,
    salary,
    techstack,
    lastDate,
    startDate,
    role,
    vacancies,
    stream,
    industry,
    workFromHome,
    partTimeAllowed,
    prerequisites
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
    !role ||
    !stream ||
    !industry ||
    !vacancies || 
    !workFromHome ||
    !partTimeAllowed ||
    !prerequisites
  ) {
    return res.json({ error: "Please add all fields" });
  }

  const techStackArray = techstack.split(",");

  const freshersjob = new Freshers({
    companyName,
    description,
    location,
    salary,
    lastDate,
    startDate,
    techstack: techStackArray,
    createdBy: user,
    role,
    stream,
    industry,
    vacancies,
    workFromHome,
    partTimeAllowed,
    prerequisites: prerequisites.split(",")
  });

  try {
    const students = await Student.find({
      savedCompanies: companyName.toUpperCase().replace(/\s/g, ""),
    });
    if (students || students.length > 0) {
      students.forEach(async (student) => {
        const notification = new StudentNotification({
          notificationFor: student._id,
          notificationBy: req.user._id,
          notificationTitle: `the company you starmarked, ${companyName} has a new fresher job opening`,
          fresherJobOpeningNotification: freshersjob._id,
          status: "unread",
        });
        await notification.save();
      });
    }
  } catch (e) {
    console.log(e);
  }

  freshersjob
    .save()
    .then((freshers) => {
      res.json({ message: "Saved Succcessfully" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ error: "Something Went Wrong" });
    });
};

exports.getAllFreshersJobs = (req, res) => {
  Freshers.find()
    .populate("createdBy", "_id personName")
    .sort("-createdAt")
    .then((fresherjob) => {
      res.json({ freshersjobs: fresherjob });
    })
    .catch((err) => {
      return res.json({ error: "Something Went Wrong" });
    });
};

exports.updateFreshersJob = (req, res) => {
  const {
    postId,
    description,
    location,
    salary,
    techstack,
    duration,
    lastDate,
    startDate,
    role,
    vacancies,
    stream,
    industry,
  } = req.body;

  Freshers.findById(postId)
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
        .then((fresherjob) => {
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

exports.deleteFreshersJob = (req, res) => {
  const { postId } = req.body;

  Freshers.findByIdAndDelete(postId)
    .then((deletedPost) => {
      // console.log(deletedPost);
      res.json({
        message: "Fresher's Job deleted successfully!",
        jobs: deletedPost,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};

exports.getFresherJobValues = (req, res) => {
  const { postId } = req.params;
  Freshers.findById(postId)
    .then((job) => {
      if (!job) {
        return res.status(400).json({ error: "Fresher's Job does not exists" });
      }
      res.json({ job: job });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};
exports.searchFresherJob = async (req, res) => {
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
  const fresherJobs = await Freshers.find(match)
    .populate("createdBy", "_id personName")
    .sort("-createdAt");
  try {
    if (fresherJobs.length === 0) {
      return res.status(200).send({ message: "No Fresher jobs found" });
    }
    res.status(200).send(fresherJobs);
  } catch (e) {
    res.status(400).send("Something went wrong");
  }
};

exports.searchFilterFreshersJobs = async (req, res) => {
  const match = {};
  if (req.query.location) {
    match.location = req.query.location;
  }
  if (req.query.lastDate) {
    const date = new Date(req.query.lastDate).toISOString();
    match.lastDate = date;
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
  const jobs = await Freshers.find(match);
  try {
    res.status(200).send({ jobs });
  } catch (e) {
    return res.status(400).send("something went wrong");
  }
};

exports.bookmarkFresherJob = async (req, res) => {
  let fresher;
  try {
    fresher = await Freshers.findById(req.params.id);
  } catch (err) {
    return res.status(500).send({ message: "Fresher's Job not found!" });
  }

  let USER;
  try {
    USER = await Student.findById(req.user._id);
  } catch (err) {
    return res.status(500).send({ message: "User not found!" });
  }

  // if (bool) {
  if (!USER.bookmarkedFresherJob.includes(req.params.id)) {
    //making sure that a user doesn't get appended to the list more than once
    USER.bookmarkedFresherJob.push(req.params.id);
    await USER.save();
    return res
      .status(200)
      .send({ message: "Fresher's Job added to bookmark!" });
  } else {
    USER.bookmarkedFresherJob = USER.bookmarkedFresherJob.filter(
      (i) => i._id != req.params.id
    );
    await USER.save();
    return res.status(200).send({ message: "Bookmark Removed!" });
  }
};

exports.getBookmarkedFresherJobs = async (req, res) => {
  let USER;
  try {
    USER = await Student.findById(req.user._id);
  } catch (err) {
    res.status(500).send({ message: "something went wrong!" });
  }

  let fresherJobs;
  try {
    fresherJobs = await Freshers.find({
      _id: { $in: USER.bookmarkedFresherJob },
    });
  } catch (err) {
    res.status(500).send({ message: "something went wrong!" });
  }

  res.status(200).json({ fresherjobs: fresherJobs });
};

exports.searchBookmarkedFresherJob = async (req, res) => {
  let USER;
  try {
    USER = await Student.findById(req.user._id);
  } catch (err) {
    return res.status(500).send({ message: "User not found!" });
  }
  const match = {};
  match._id = { $in: USER.bookmarkedFresherJob };
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
  if (req.query.role) {
    match.role = req.query.role;
  }
  if (req.query.vacancies) {
    match.vacancies = req.query.vacancies;
  }

  try {
    const fresherJobs = await Freshers.find(match)
      .populate("createdBy", "_id personName")
      .sort("-createdAt");
    if (fresherJobs.length === 0) {
      return res.status(200).send({ message: "No fresher jobs found" });
    }
    res.status(200).send(fresherJobs);
  } catch (e) {
    res.status(400).send({ message: "Something went wrong" });
  }
};

exports.getFreshersJobsByLocations = (req, res) => {
  Freshers.aggregate([
    {
      $group: {
        _id: "$location",
        freshersJobs: { $push: "$$ROOT" },
      },
    },
    {
      $sort: { location: 1, createdAt: -1 },
    },
  ]).then((freshersJobs) => {
    console.log(freshersJobs);
    res.json({ freshersJobs: freshersJobs });
  });
};

exports.getFreshersJobsByStreams = (req, res) => {
  Freshers.aggregate([
    {
      $group: {
        _id: "$stream",
        freshersjobs: { $push: "$$ROOT" },
      },
    },
    {
      $sort: { stream: 1, createdAt: -1 },
    },
  ]).then((freshersjobs) => {
    console.log(freshersjobs);
    res.json({ freshersjobs: freshersjobs });
  });
};

exports.getFreshersJobsByIndustries = (req, res) => {
  Freshers.aggregate([
    {
      $group: {
        _id: "$industry",
        freshersjobs: { $push: "$$ROOT" },
      },
    },
    {
      $sort: { industry: 1, createdAt: -1 },
    },
  ]).then((freshersjobs) => {
    console.log(freshersjobs);
    res.json({ freshersjobs: freshersjobs });
  });
};

exports.getFreshersJobsByCompanyName = (req, res) => {
  const { companyName } = req.params;

  if (!companyName) {
    res.status(422).json({ error: "Please fill loction" });
  }

  Freshers.find({ companyName: companyName })
    .populate("createdBy", "_id personName")
    .sort("-createdAt")
    .then((FreshersJobs) => {
      res.json({ FreshersJobs: FreshersJobs });
    });
};

exports.getFreshersJobsCompanyNames = (req, res) => {
  Freshers.aggregate([
    {
      $group: {
        _id: "$companyName",
        total: { $sum: 1 },
      },
    },
    {
      $sort: { total: -1 },
    },
  ]).then((FreshersJobs) => {
    console.log(FreshersJobs);
    res.json({ FreshersJobs: FreshersJobs });
  });
};
