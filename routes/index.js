var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'FPID Demo', fpid: req.cookies.FPID || randomNumber});
});

module.exports = router;
