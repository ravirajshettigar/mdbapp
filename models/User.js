var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    userId: Number,
    firstName: String,
    lastName: String,
    age: Number
});

module.exports = mongoose.model('User', userSchema);