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
        res.json({freshersjob: fresherjob});
      })
      .catch((err) => {
        return res.json({ error: "Something Went Wrong" });
      });
  };