'use strict';

var express = require('express');
var myRouter = require(__dirname + '/lib/my_router');
var app = express();

app.use(function(req, res, next) {
  console.log('hello from server middleware');
  next();
});

app.use('/api', myRouter);

app.use(function(req, res, next) {
  console.log('hello from second server middleware');
  next();
});

app.get('/another', function(req, res) {
  console.log('hello from another');
  res.send('wow, another route, so useful');
});

app.listen(3000, function() {
  console.log('server up');
});
