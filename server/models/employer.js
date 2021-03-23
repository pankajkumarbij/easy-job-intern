const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employerSchema = new Schema({
    companyName:{
        type: String,
        required:true,
        // maxlength:40
    },
    personName:{
        type:String,
        required: true,
        // unique:true
    },
    email:{
        type:String,
        required:true,
        // minlength:10,
        // maxlength:10
    },
    contact:{
        type:String,
        required: true
    },
    password:{
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

const Employer = mongoose.model('Employer',employerSchema);

module.exports = Employer;