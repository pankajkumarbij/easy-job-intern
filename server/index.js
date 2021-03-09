// require('./config/db')
const express=require("express");
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const saltRounds = 10;
const PORT=5000;

mongoose.connect('mongodb://localhost:27017/easyJobDB', {useNewUrlParser: true, useUnifiedTopology: true});

const userSchema = new mongoose.Schema({
	email: String,
	password: String
});

const User = new mongoose.model('User',userSchema);

const app = express();
app.use(bodyParser.urlencoded({extended : true}));
const cors = require('cors');
app.use(cors());



const UserRouter = require('./api/User');

app.use('/user',UserRouter);

app.get('/',(req,res)=>{
    res.send("Hello World");
});

app.post('/login', function(req,res){
	let userId = req.body.username;	//user entered email 
	let userPassword = req.body.password;	//user entered password
	User.find({email: userId}, function(err,users){
		if(err)
			res.send(err);
		else{
			if(users === null || users.length === 0)
				res.send("Invalid userID or password");
			else{
				bcrypt.compare(userPassword,users[0].password, function(err, result){
					if(result === true)
						res.send("Logged in successfully");
				});
			}
		}
	});
});
app.post('/register', function(req,res){
	let userId = req.body.username;	//user entered email 
	let userPassword = req.body.password;	//user entered password
	User.find({email: userId}, function(err,users){
		if(users.length !== 0)	//user tries same ID for registering again
			res.send("The user already exists!");
		else{
			bcrypt.hash(userPassword, saltRounds, function(err, result){
				let newUser = new User({
					email: userId,
					password: result	//hashing the user password
				});
				newUser.save(function(err){
					if(err)
						res.send("Error, Try again later");
					else
						res.send("Signed in successfully!!");
				});
			});
		}
	});
});

app.listen(PORT,()=>{
    console.log("server is running on port ",PORT)
})
