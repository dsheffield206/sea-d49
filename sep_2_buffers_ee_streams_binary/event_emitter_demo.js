'use strict';

var EE = require('events').EventEmitter;
var fs = require('fs');

var fileEvents = new EE();

fileEvents.on('done', function(data) {
  console.log('done');
  console.log(data);
});

fs.readFile('somefile', function(err, data) {
  if (err) return console.log(err);
  console.log('callback');

  fileEvents.emit('done', data.toString());
});

fs.readFile('another_file', function(err, data) {
  if (err) return console.log(err);
  console.log('anther callback');

  fileEvents.emit('done', data.toString());
});

console.log('first');
