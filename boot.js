var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');
var expressHandlebars = require('express-handlebars');
var expressValidator = require('express-validator');
var expressSession = require('express-session');
var mongoose = require('mongoose');

var expressRouter = express.Router();

var expressServer = express();

expressServer.listen(3000);

//using bodyParser as middleware so that request body can be read for application/json
expressServer.use(bodyParser.json());
//using bodyParser as midleware so that request body can be read for x-www-form-urlencoded as json
expressServer.use(bodyParser.urlencoded({
    extended: true
}));

//using express validator as middleware to perform server side data validation
expressServer.use(expressValidator());
//using express sesion as middleware
expressServer.use(expressSession({
    secret: "Th!s!s@s3cr3t",
    saveUninitialized: false,
    resave: false
}));

//Configuring templating view engine using express handlebars
expressServer.engine('jsp', expressHandlebars({
    extname: 'jsp',
    defaultLayout: 'wrapper'
}));
expressServer.set('views', path.join(__dirname, 'views'));
expressServer.set('view engine', 'jsp');

//verify if session is valid
expressRouter.use('/web', function(request, response, next){
    if(request.url === '/login'){
        response.render('login');
    }else if(request.url === '/logout'){
        response.render('login', {
            logout: 'Successfully logged out'
        });
    }else{
         if(request.session.user){
            next(); 
        }else{    
            response.render('login', {
                error: 'Invalid Session'
            });
        }
    }
});

//Routing configuration for REST API
//using express router as middleware
expressServer.use(expressRouter);
//web api routing... 
expressRouter.use('/webapi', require('./controllers'));
expressRouter.use('/public', express.static(path.join(__dirname, 'bower_components')));
expressRouter.use('/assets', express.static(path.join(__dirname, 'views', 'assets')));

expressServer.get('/', function(request, response){
    response.redirect('/web/login');
});

//initialize connection to mongoose
var models = require('./models');
mongoose.Promise = global.Promise;
mongoose.set('debug', true);
mongoose.connect('mongodb://localhost/mdbapp', {
    useMongoClient : true
});