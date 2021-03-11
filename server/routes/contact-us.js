const express = require("express");
const router = express.Router();
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/"

const ContactSchema = require("../models/contact-us-model");

router.post("/contact-us", (req, res) => {
  var { email, first_name, last_name, message, contact } = req.body;
  // console.log(email,first_name,last_name,message,contact);
  email = email ? email.trim() : "";
  first_name = first_name ? first_name.trim() : "";
  last_name = last_name ? last_name.trim() : "";
  contact = contact ? contact.trim() : "";
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("eji");
    const newMessage = new ContactSchema({
      first_name,
      last_name,
      email,
      contact,
      message,
    });
    dbo
      .collection("ContactMessage")
      .insertOne(newMessage, function (err, result) {
        if (err) throw err;
        console.log(result.ops[0]);
        res.send(result.ops[0]);
        db.close();
      });
  });
});

module.exports = router;
