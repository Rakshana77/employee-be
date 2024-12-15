const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const SignupSchema = new Schema({
    name: String,
    email: String,
    password:String
})
const Signupmodel = mongoose.model('signup', SignupSchema);
module.exports = Signupmodel;