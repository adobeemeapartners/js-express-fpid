var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {txt: 'GET respond with a resource'});
});

/* POST users listing. */
router.post('/', function(req, res, next) {
  res.render('users',{ txt: 'POST respond with a resource'});
});

module.exports = router;
