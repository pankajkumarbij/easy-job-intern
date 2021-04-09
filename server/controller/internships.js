const Internship = require("../models/Internship");

exports.createInternship = (req, res) => {
  const {
    companyName,
    description,
    location,
    stipend,
    techstack,
    duration,
    lastDate,
    startDate,
    endDate,
  } = req.body;
  const user = req.user;

  if (
    !companyName ||
    !description ||
    !location ||
    !stipend ||
    !techstack ||
    !lastDate ||
    !startDate ||
    !endDate ||
    !duration
  ) {
    return res.json({ error: "Please add all fields" });
  }

  // let techStackArray = new Array();
  const techStackArray = techstack.split(",");
  // console.log(techStackArray);
  // console.log(typeof(endDate));
  // const duration = endDate.getMonth() - startDate.getMonth();
  // console.log(duration);

  // int x = stringToDate(endDate,'/')

  const internship = new Internship({
    companyName,
    description,
    location,
    stipend,
    lastDate,
    duration,
    startDate,
    endDate,
    techstack: techStackArray,
    createdBy: user,
  });

  console.log(internship);

  internship
    .save()
    .then((intern) => {
      res.json({ message: "Saved Succcessfully" });
    })
    .catch((err) => {
      console.log(err);
      return res.json({ error: "Something Went Wrong" });
    });
};

exports.getAllInternships = (req, res) => {
  Internship.find()
    .populate("createdBy", "_id personName")
    .sort("-createdAt")
    .then((internships) => {
      res.json(internships);
    })
    .catch((err) => {
      return res.json({ error: "Something Went Wrong" });
    });
};
