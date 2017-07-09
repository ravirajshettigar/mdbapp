var express = require('express');
var loginRouter = express.Router();

loginRouter.get('/login', function(request, response){
    response.render('login', {});
});

loginRouter.get('/logout', function(request, response){
    request.session.user = undefined;
    response.render('login', {
        logout: 'Successfully logged out'
    });
});
module.exports = loginRouter;