const Freshers = require("../models/Freshers");

exports.createFreshersJob = (req, res) => {
  const {
    companyName,
    description,
    location,
    salary,
    techstack,
    lastDate,
    startDate,
  } = req.body;
  const user = req.user;

  if (
    !companyName ||
    !description ||
    !location ||
    !salary ||
    !techstack ||
    !lastDate ||
    !startDate
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
  });

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
      res.json({ message: "Fresher's Job deleted successfully!" , jobs: deletedPost});
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