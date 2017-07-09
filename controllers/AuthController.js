var express = require('express');
var authRouter = express.Router();

authRouter.post('/', function(request, response){
    var authInfo = request.body;

    if(authInfo.username === 'admin'){
        if(authInfo.password === 'admin123'){            
            response.render('dashboard', {});
        }
    }else{
        response.render('login', {
            error: 'Invalid Username or Password'
        }); 
    }
});

module.exports = authRouter;