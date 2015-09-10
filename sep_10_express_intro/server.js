'use strict';
var bodyParser = require('body-parser');
var app = require('express')();
var http = require('http');

app.use(bodyParser.json());

app.post('/greet', function(req, res) {
  res.json({msg: 'hello ' + req.body.name});
});

app.get('/greet', function(req, res, next) {
  console.log('hello from middleware!');
  req.someVal = 'set from middleware';
  next();
},
function(req, res) {
  console.log(req.someVal);
  res.json({msg: 'hello world'});
});

app.get('/greet/:name', function(req, res) {
  res.json({msg: 'hello ' + req.params.name});
});

app.get('/greet/:firstName/:lastName', function(req, res) {
  res.json({msg: 'hello ' + req.params.firstName + ' ' + req.params.lastName});
});

app.get('*', function(req, res) {
  res.status(404).json({msg: 'could not find page'});
});

var server = http.createServer(app);
server.listen(3000, function() {
  console.log('server started');
});
