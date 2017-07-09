var express = require('express');
var rootRouter = express.Router();

rootRouter.use('/auth', require('./AuthController'));
rootRouter.use('/users', require('./UserController'));
rootRouter.use('/todos', require('./TodoController'));

module.exports = rootRouter;
