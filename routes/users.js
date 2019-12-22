var express = require('express');
var router = express.Router();
var LoginModel = require('../model/login');
/* GET users listing. */
router.get('/', function(req, res, next) {
  LoginModel.getEmployeeList((err, result) =>{
    if(err){
      console.log(err);
    }
    else{
      res.send(result.rows);
    }
  })
});

module.exports = router;
