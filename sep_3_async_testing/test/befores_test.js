'use strict';

var expect = require('chai').expect;
var fs = require('fs');

describe('an async test', function() {
  before(function() {
    //runs once before running it blocks
    this.something = 'hello world';
    this.x = (this.x || 0) + 1;
  });

  beforeEach(function() {
    //runs before each it block
    this.y = (this.y || 0) + 1;
  });

  after(function() {
    expect(this.x).to.eql(1);
    expect(this.y).to.eql(4);
  });

  it('should run a test', function() {
    expect(this.something).to.eql('hello world');
  });

  it('should run a test 2', function() {
    expect(true).to.be.true;
  });

  it('should run a test 3', function() {
    expect(true).to.be.true;
  });

  it('should run a test 4', function() {
    expect(true).to.be.true;
  });

});
