const Internship = require("../models/Internship");

exports.createInternship = (req, res) => {
  const {
    companyName,
    description,
    location,
    stipend,
    techstack,
    lastDate,
    duration,
  } = req.body;
  const user = req.user;

  if (
    !companyName ||
    !description ||
    !location ||
    !stipend ||
    !techstack ||
    !lastDate ||
    !duration
  ) {
    return res.json({ error: "Please add all fields" });
  }

  const internship = new Internship({
    companyName,
    description,
    location,
    stipend,
    lastDate,
    duration,
    techstack,
    createdBy: user
  });


  internship.save().then((intern) => {
    res.json({ message: "Saved Succcessfully"});
  }).catch((err) => {
      console.log(err);
      return res.json({error:"Something Went Wrong"})
  });
};
