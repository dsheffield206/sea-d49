var expect = require('chai').expect;
var seaD49Router = require(__dirname + '/../index');

describe('the SEA D49 Router', function() {
  var testRes; 
  beforeEach(function() {
    this.router = seaD49Router(); 
    testRes = {test: 'this is a test'};
  });

  it('should be able to setup a get request', function() {
    var testReq = {
      method: 'GET',
      url: '/test' 
    }; 
    
    this.router.get('/test', function(req, res) {
      expect(res.test).to.eql('this is a test');
    });
    this.router.route(testReq, testRes);
  });

  it('should be able to setup a post request', function() {
    var testReq = {
      method: 'POST',
      url: '/test' 
    }; 
  
    this.router.post('/test', function(req, res) {
      expect(res.test).to.eql('this is a test');
    });
    this.router.route(testReq, testRes);
  });

  it('should be able to setup a put request', function() {
    var testReq = {
      method: 'PUT',
      url: '/test' 
    }; 

    this.router.put('/test', function(req, res) {
      expect(res.test).to.eql('this is a test');
    });
    this.router.route(testReq, testRes);
  });

  it('should be able to setup a patch request', function() {
    var testReq = {
      method: 'PATCH',
      url: '/test' 
    }; 

    this.router.patch('/test', function(req, res) {
      expect(res.test).to.eql('this is a test');
    });
    this.router.route(testReq, testRes);
  });

  it('should be able to setup a delete request', function() {
    var testReq = {
      method: 'DELETE',
      url: '/test' 
    }; 

    this.router.delete('/test', function(req, res) {
      expect(res.test).to.eql('this is a test');
    });
    this.router.route(testReq, testRes);
  });

});
