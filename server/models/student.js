const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    name:{
        type: String,
        required:true,
        maxlength:40
    },
    email:{
        type:String,
        required: true,
        unique:true
    },
    mobile:{
        type:String,
        required:true,
        minlength:10,
        maxlength:10
    },
    password:{
        type:String,
        required: true
    },

});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;