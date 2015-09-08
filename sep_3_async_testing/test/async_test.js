'use strict';

var expect = require('chai').expect;
var fs = require('fs');

describe('an async test', function() {
  it('should test fs', function(done) {
    fs.readFile(__dirname + '/testfile', function(err, data) {
      expect(err).to.eql(null);
      expect(data.toString()).to.eql('hello test\n');
      done();
    });
  });
});
