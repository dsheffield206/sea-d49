var express = require('express');

var router = module.exports = exports = express.Router();

router.use(function(req, res, next) {
  console.log('hello from my router middleware');
  next();
});

router.get('/someroute', function(req, res) {
  console.log('hello from someroute');
  res.send('wow such route, so informative');
});
