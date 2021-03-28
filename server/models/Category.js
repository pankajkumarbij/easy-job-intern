const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    name:{
        type: String,
        required:true,
        maxlength:40
    },
    slug:{
        type:String,
        unique:true,
        index:true
    }
});

const Category = mongoose.model('Category',categorySchema);

module.exports = Category;