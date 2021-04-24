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
      res.json({jobs: jobs});
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
    vacancies
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
      res.json({ message: "Job deleted successfully!" , jobs: deletedPost});
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


exports.searchJob = async(req, res) => {
  const match = {createdBy: req.user._id}
  if (req.query.id) {
    match._id = req.query.id
  }
  if (req.query.techstack) {
    match.techstack = { $in: req.query.techstack }
  }
  if (req.query.salary) {
    match.salary = req.query.salary 
  }
  if (req.query.startDate) {
    const date = new Date(req.query.startDate).toISOString()
    match.startDate = date
  }
  if(req.query.role){
    match.role = req.query.role 
  }
  if(req.query.vacancies){
    match.vacancies = req.query.vacancies 
  }
  const jobs = await Job.find(match).populate("createdBy", "_id personName").sort("-createdAt")
  try{
    if(jobs.length===0){
      return res.status(200).send({message: "No jobs found"})
    }
    res.status(200).send(jobs)
  }
  catch(e){
    res.status(400).send('Something went wrong')
  }
}
  
exports.searchFilterJobs = async(req, res) => {
  const match = {}
  if(req.query.location){
    match.location = req.query.location 
  }
  if(req.query.experience){
    match.experience = req.query.experience 
  }
  if(req.query.companyName){
    match.companyName = req.query.companyName 
  }
  if(req.query.techstack){
    match.techstack = { $in: req.query.techstack }
  }
  if(req.query.startDate){
    const date = new Date(req.query.startDate).toISOString()
    match.startDate = date
  }
  if(req.query.role){
    match.role = req.query.role 
  }
  if(req.query.vacancies){
    match.vacancies = req.query.vacancies 
  }
  const jobs = await Job.find(match)
  try{
    res.status(200).send({ jobs: jobs });
  }
  catch(e){
    return res.status(400).send('something went wrong')
  }
}

