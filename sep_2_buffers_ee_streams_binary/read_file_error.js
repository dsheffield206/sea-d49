'use strict';

var fs = require('fs');
try {
  fs.readFile('does_not_exist', function(err, data) {
    if (err) throw err;
  });
} catch(e) {
  console.log('we caught an error ' + e.message);
}
