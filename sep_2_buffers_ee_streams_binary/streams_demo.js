'use strict';

var fs = require('fs');

var file = fs.createReadStream('somefile');
file.pipe(process.stdout);

console.log('first');
