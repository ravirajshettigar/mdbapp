var mongoose = require('mongoose');

//initialize mongoose schema data types
var User = require('./User');
var Todo = require('./Todo');

module.exports = {
    User : User,
    Todo : Todo
}