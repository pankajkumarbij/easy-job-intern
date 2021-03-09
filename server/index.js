// require('./config/db')
const express=require("express");
const app=express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const PORT=5000;


const UserRouter = require('./api/User');


const bodyParser = require('express').json;

app.use(bodyParser())

app.use('/user',UserRouter);

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.listen(PORT,()=>{
    console.log("server is running on port ",PORT)
})
