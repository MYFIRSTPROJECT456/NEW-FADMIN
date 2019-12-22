var express = require('express');
const loginJs = require('./login'),
      dashboarJs = require('./dashboard');
var allRouters = express();

allRouters.use('/login', loginJs);
allRouters.use('/', dashboarJs)

module.exports = allRouters;
