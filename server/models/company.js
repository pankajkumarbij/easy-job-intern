const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const {ObjectId} = mongoose.Schema.Types;

const companySchema = new Schema({
    companyName:{
        type: String,
        required:true,
    },
    companySize:{
        enum: ['1-10', '11-50', '51-200', '201-500', '210-500', '501-1000', '1001-5000', '5000+'],
        type: String,
        required:true,
    },
    overview: {
        type: String,
        required: true,
    },
    locations:[{
        type: String,
        required:true,
    }],
    tags:[{
        type: String,
        required:true,
    }],
    tagline:{
        type: String,
        required:true,
    },
    investmentStage:{
        type: String,
        required:true,
    },
    markets:[{
        type: String,
        required:true,
    }],
    createdBy: {
        type: ObjectId,
        ref: "Employer",
        required:true,
    },

}, {timestamps: true})

const Company = mongoose.model('Company',companySchema);

module.exports = Company;