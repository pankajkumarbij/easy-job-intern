const Student = require("../models/student");

exports.addProfileBuilder = async (req, res) => {
  const { Profile } = req.body;

  let USER;
  try {
    USER = await Student(req.user._id);
  } catch (err) {
    res.status(500).send({ message: "something went wrong!" });
  }

  if (!USER) {
    res.status(400).send({ message: "user not found" });
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
      res.status(500).send({ message: "something went wrong!" });
    });
};

exports.getProfileStudent = (req, res) => {
  Student.findById(req.user._id)
    .then((student) => {
      if (student) {
        res.status(200).json({ profile: student.Profile });
      }
      res.status(400).send({ message: "student not found" });
    })
    .catch((err) => {
      res.status(500).send({ message: "something went wrong!" });
    });
};
