const express = require("express");
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 5000;
var url = "mongodb://localhost:27017/eji"

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
mongoose.connection.on('connected', () => {
    console.log("Database Connected");
})
mongoose.connection.on("error", (err) => {
    console.log('connecting error', err);
})

const app = express();

app.use(cors())
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({
    extended: true
}));

const StudentRouter = require('./routes/student');

app.use('/student', StudentRouter)

app.get('/', (req, res) => {
    res.send("Welcome to easy job intern server");
});

app.listen(PORT, () => {
    console.log("server is running on port ", PORT)
})