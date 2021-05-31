const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");
const {JWT_SECRET} = require('../keys');
const jwt = require("jsonwebtoken");
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
    }],
    status: {
        type: String,
        enum: ['Pending', 'Active'],
        default: 'Pending',
    },
    confirmationCode: { 
        type: String, 
        unique: true 
    }
});


employerSchema.methods.generateAuthToken = async function(){ 
    const employer = this
    const token = jwt.sign({_id: employer._id}, JWT_SECRET) 
    employer.tokens = employer.tokens.concat({token:token})
    await employer.save() 
    return token
}

employerSchema.statics.findByCredentials = async(email, password) =>{
    const employer = await Employer.findOne({email: email}) 
    if(!employer){
        throw new Error('Invalid email or password')
    }
    const isMatch = await bcrypt.compare(password, employer.password)  

    if(!isMatch){
        throw new Error('Invalid email or password')
    }

    return employer
}

employerSchema.pre('save',async function (next){
    const employer = this 
    if(employer.isModified('password')){
        employer.password = await bcrypt.hash(employer.password, 10)  
    }
    next() 

}) 

const Employer = mongoose.model('Employer',employerSchema);

module.exports = Employer;