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
  const { postId } = req.params;
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

exports.deleteInternship = (req, res) => {
  const { postId } = req.body;

  Internship.findByIdAndDelete(postId)
    .then((deletedPost) => {
      res.json({ message: "Internship deleted successfully!" });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: "Something went wrong!" });
    });
};

exports.searchFilterInternships = async(req, res) => {
  const match = {}
  if(req.query.location){
    match.location = req.query.location 
  }
  if(req.query.duration){
    match.duration = req.query.duration 
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
  const internships = await Internship.find(match)
  try{
    res.status(200).send({ internships: internships });
  }
  catch(e){
    return res.status(400).send('something went wrong')
  }
  // const internship = await Internship.find({ techstack: { $in: match.techstack }, 'location': 'l2'})

}

exports.searchInternship = async(req, res) => {
  const match = {createdBy: req.user._id}
  if (req.query.stipend) {
    match.stipend = req.query.stipend
  }
  if (req.query.techstack) {
    match.techstack = { $in: req.query.techstack }
  }
  if (req.query.duration) {
    match.duration = req.query.duration 
  }
  if (req.query.startDate) {
    const date = new Date(req.query.startDate).toISOString()
    match.startDate = date
  }
  const internships = await Internship.find(match).populate("createdBy", "_id personName").sort("-createdAt")
  try{
    if(internships.length===0){
      return res.status(200).send({message: "No internships found"})
    }
    res.status(200).send(internships)
  }
  catch(e){
    res.status(400).send('Something went wrong')
  }
}

