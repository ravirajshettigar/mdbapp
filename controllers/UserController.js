var utils = require('../commons/Utils');
var express = require('express');
var models = require('../models');
var User = models.User;

var userRouter = express.Router();

userRouter.get('/', function(request, response){
    var jsonData = User.find({})
    .exec(function(error, users){
        if(error){
            utils.jsonResponse(request, response, {}, true);
        }else{
            utils.jsonResponse(request, response, users, true);
        }
    });
    
});

userRouter.get('/:userId', function(request, response){
   utils.debugRequest(request, response, true);
});

userRouter.post('/', function(request, response){
    User.create(request.body, function(error, newUser){
        if(error){
            response.end();
        }else{
            utils.jsonResponse(request, response, userData, true);
        }
    });
});

userRouter.put('/:id', function(request, response){

    User.findOneAndUpdate({
        _id: request.params.id
    },
    {
        $set : {
            userId: request.body.userId,
            firstName : request.body.firstName,
            lastName: request.body.lastName,
            age: request.body.age
        }
    },
    {
        upsert: true
    },
    function(error, updatedUser){
        if(error){
            repsonse.end();
        }else{
            utils.jsonResponse(request, response, updatedUser, true);
        }       
    });
});

userRouter.delete('/:id', function(request, response){
    User.findOneAndRemove({
        _id: request.params.id
    }, function(error, deletedUser){
        if(error){
            response.end();
        }else{
            utils.jsonResponse(request, response, deletedUser, true);
        }
    });
});

module.exports = userRouter;