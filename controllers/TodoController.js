var utils = require('../commons/Utils');
var express = require('express');
var models = require('../models');
var Todo = models.Todo;
var todoRouter = express.Router();

todoRouter.get('/', function(request, response){
    Todo.find().exec()
    .then(function(todos){
        utils.jsonResponse(request, response, todos, true);
    })
    .catch(function(error){
        utils.jsonResponse(request, response, error, true);
    });
});

todoRouter.get('/:todoId', function(request, response){
    Todo.find({
        _id : request.params.todoId
    }).exec()
    .then(function(todos){
        utils.jsonResponse(request, response, todos, true);
    })
    .catch(function(error){
        utils.jsonResponse(request, response, error, true);
    });
});

todoRouter.post('/', function(request, response){
    Todo.create(request.body)
    .then(function(todo){
        utils.jsonResponse(request, response, todo, true);
    })
    .catch(function(error){
        utils.jsonResponse(request, response, error, true);
    })
});

todoRouter.put('/', function(request, response){
    utils.debugRequest(request, response, true);
});

todoRouter.delete('/:todoId', function(request, response){
    utils.debugRequest(request, response, true);
});

module.exports = todoRouter;