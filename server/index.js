const express=require("express");
const PORT=5000;

const app = express();

const ContactRouter = require('./routes/contact-us');

app.use('/contact',ContactRouter);

app.get('/',(req,res)=>{
    res.send("Welcome to easy job intern server");
});

app.listen(PORT,()=>{
    console.log("server is running on port ",PORT)
})