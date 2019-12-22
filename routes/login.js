var express = require('express');
var router = express.Router();
var LoginModel = require('../model/login');

router.get('/', function(req, res, next) {
  res.render('login');
});

module.exports = router;