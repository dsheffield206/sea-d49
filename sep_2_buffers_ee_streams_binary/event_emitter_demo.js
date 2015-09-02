'use strict';

var EE = require('events').EventEmitter;
var fs = require('fs');

var fileEvents = new EE();

fileEvents.on('done', function(data) {
  console.log('done');
  console.log(data);
});

fileEvents.on('random', function(data) {
  console.log('random');
  console.log(data);
  fileEvents.emit('done', data);
});

fs.readFile('somefile', function(err, data) {
  if (err) return console.log(err);
  console.log('callback');

  fileEvents.emit('done', data.toString());
});

process.nextTick(function() {
  setTimeout(function() {fileEvents.emit('random', 'hello world from random');}, 1000);
});

console.log('first');
