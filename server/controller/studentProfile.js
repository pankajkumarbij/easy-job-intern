const Student = require("../models/student");

exports.addProfileBuilder = async (req, res) => {
  const { Profile } = req.body;
  console.log(Profile);

  let USER;
  try {
    USER = await Student(req.user._id);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "something went wrong!" });
  }

  if (!USER) {
    res.json({ message: "user not found" });
  }

  Student.findByIdAndUpdate(
    req.user._id,
    {
      Profile,
    },
    { new: true }
  )
    .then((student) => {
      res.status(200).json({ student: student });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: "something went wrong!" });
    });
};

exports.getProfileStudent = (req, res) => {
  Student.findById(req.user._id)
    .then((student) => {
      if (student) {
        res.status(200).json({ profile: student.Profile });
      }
      res.status(400).json({ message: "student not found" });
    })
    .catch((err) => {
      res.status(500).json({ message: "something went wrong!" });
    });
};
