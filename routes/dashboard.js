var express = require('express');
const axios = require('axios');
var CircularJSON = require('circular-json');
var router = express.Router();

router.get('/dashboard', function(req, res, next) {
  res.render('dashboard');
});

router.get('/addProduct', function(req, res, next) {
  res.render('addProduct');
});

router.get('/catlog', function(req, res, next) {
  res.render('catlog');
});
router.get('/category', function(req, res, next) {
  let id = req.query
  console.log(req.query, 'req.query', 'https://www.flinn360science.com/Home/LabDetails?LabCategoryId='+id.id)
  axios.get('https://www.flinn360science.com/Home/LabDetails?LabCategoryId='+id.id)
    .then(response => {
      res.send(CircularJSON.stringify(response['data']['Data']))
    })
    .catch(error => {
      console.log(error);
    });
});
module.exports = router;