const express = require("express");
const router = express.Router();
const mongoose = require('mongoose')

const ContactSchema = require("../models/contact-us-model");

router.post("/contact-us", (req, res) => {
  var { email, first_name, last_name, message, contact } = req.body;
 if(!email || !first_name || !last_name || !message){
   return res.status(422).json({
     error:"Please fill all fields"
   })
 }
  const contactMessage = new ContactSchema({
    email,
        first_name,
        last_name,
        message,
        contact
  })
  contactMessage.save()
  .then(data=>{
    res.json(data)
  })
  .catch(error=>{console.log(error)})
})

module.exports = router;
