const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    personName:{
        type: String,
        required:true,
        // maxlength:40
    },
    email:{
        type:String,
        required: true,
        // unique:true
    },
    contact:{
        type:String,
        required:true,
        // minlength:10,
        // maxlength:10
    },
    password:{
        type:String,
        required: true
    },
    branch:{
        type:String,
        required: true
    },
    year:{
        type:String,
        required: true
    },
    degree:{
        type:String,
        required: true
    },
    institutionName:{
        type:String,
        required: true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]

});

const Student = mongoose.model('Student',studentSchema);

module.exports = Student;