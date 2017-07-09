var mongoose = require('mongoose');

var todoSchema = new mongoose.Schema({
    todoId: Number,
    title: String,
    description: String,
    priority: Number,
    status: String,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('Todo', todoSchema);