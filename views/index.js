var express = require('express');

var rootRouter = express.Router();

rootRouter.use('/web', require('./login'));

module.exports = rootRouter;