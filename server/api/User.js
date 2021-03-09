const express = require("express");
const router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/"

//Mongodb contactUs model:
const ContactSchema = require("../models/ContactUsForm");


//Route: ContactUs
router.post("/ContactUsSubmit", (req, res) => {
  let { email, first_name,last_name,message,contact } = req.body;
  email = email.trim();
  first_name = first_name.trim();
  last_name = last_name.trim();
  contact = contact.trim();
  MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("eji");
    const newMessage = new ContactSchema({first_name,last_name,email,contact,message});
    dbo.collection("ContactMessage").insertOne(newMessage, function(err, result) {
      if (err) throw err;
      console.log(result.ops[0]);
      res.send(result.ops[0]);
      db.close();
      
    });
  });
})

module.exports = router;
