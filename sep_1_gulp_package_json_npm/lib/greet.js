'use strict';

var greet = module.exports = exports = function(name) {
  debugger; /* jshint ignore:line */
  return 'hello ' + name;
};

greet('some person');
