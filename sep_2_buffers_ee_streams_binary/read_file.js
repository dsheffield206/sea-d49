'use strict';

var fs = require('fs');
fs.readFile('somefile', function(err, data) {
  if (err) return console.log(err);
  debugger;
});

console.log('end of execution');
