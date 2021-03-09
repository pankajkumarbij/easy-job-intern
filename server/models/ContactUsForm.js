const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ContactUsSchema = new Schema({
    first_name: String,
    last_name: String,
    email: String,
    contact: String,
    message: String

});

const ContactSchema = mongoose.model('ContactSchema',ContactUsSchema);

module.exports = ContactSchema;