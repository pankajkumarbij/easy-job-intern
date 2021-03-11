const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const ContactSchema = require("../models/contact-us-model");

router.post("/contact-us", (req, res) => {
  var { email, first_name, last_name, message, contact } = req.body;
  if (!email || !first_name || !last_name || !message) {
   throw new Error('Fill all the fields')
  }
  const contactMessage = new ContactSchema({
    email,
    first_name,
    last_name,
    message,
    contact,
  });
  contactMessage
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      console.log(err);
      throw new Error(err);
    });
});

module.exports = router;
