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

  // console.log(internship);

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
      res.json({ internships: internships });
    })
    .catch((err) => {
      return res.json({ error: "Something Went Wrong" });
    });
};

exports.updateInternship = (req, res) => {
  const {
    postId,
    description,
    location,
    stipend,
    techstack,
    duration,
    lastDate,
    startDate,
    endDate,
  } = req.body;

  Internship.findById(postId)
    .then((internship) => {
      // console.log(internship);
      if (description) {
        internship.description = description;
      }
      if (location) {
        internship.location = location;
      }
      if (stipend) {
        internship.stipend = stipend;
      }
      if (techstack) {
        const techStackArray = techstack.split(",");
        internship.techstack = techStackArray;
      }
      if (duration) {
        internship.duration = duration;
      }
      if (lastDate) {
        internship.lastDate = lastDate;
      }
      if (startDate) {
        internship.startDate = startDate;
      }
      if (endDate) {
        internship.endDate = endDate;
      }

      internship
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

exports.getInternshipValues = (req, res) => {
  const {postId} = req.params;
  Internship.findById(postId)
    .then((internship) => {
      if (!internship) {
        return res.status(400).json({ error: "Internship does not exists" });
      }
      res.json({ internship: internship });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};

