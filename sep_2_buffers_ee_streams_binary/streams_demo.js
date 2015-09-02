'use strict';

var fs = require('fs');

var file = fs.createReadStream('somefile');

file.on('data', function(data) {
  console.log(data.toString());
});

console.log('first');
