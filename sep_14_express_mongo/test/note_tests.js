'use strict';

var chai = require('chai');
var chaiHttp = require('chai-http');
chai.use(chaiHttp);
var expect = chai.expect;
process.env.MONGO_URL = 'mongodb://localhost/notes_test';
require(__dirname + '/../server.js');
var mongoose = require('mongoose');
var url = 'localhost:3000/api';
var Note = require(__dirname + '/../models/note');

describe('the notes resource', function() {
  after(function(done) {
    mongoose.connection.db.dropDatabase(function(err) {
      if (err) throw err;
      done();
    });
  });

  it('should be able to get notes', function(done) {
    chai.request(url)
      .get('/notes')
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(Array.isArray(res.body)).to.eql(true);
        done();
      });
  });

  it('should be able to create a note', function(done) {
    chai.request(url)
      .post('/notes')
      .send({noteBody: 'test note'})
      .end(function(err, res) {
        expect(err).to.eql(null);
        expect(res.body.noteBody).to.eql('test note');
        expect(res.body.author).to.eql('Anonymous');
        done();
      });
  });

  describe('routes that need a note in the database', function() {
    beforeEach(function(done) {
      var testNote = new Note({noteBody: 'test'});
      testNote.save(function(err, data) {
        if (err) throw err;
        this.testNote = data;
        done();
      }.bind(this));
    });

   it('should be able to update a note', function(done) {
      chai.request(url)
        .put('/notes/' + this.testNote._id)
        .send({noteBody: 'new noteBody'})
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success');
          done();
        });
   });

   it('should be able to delete a note', function(done) {
      chai.request(url)
        .delete('/notes/' + this.testNote._id)
        .end(function(err, res) {
          expect(err).to.eql(null);
          expect(res.body.msg).to.eql('success');
          done();
        });
   });

  });
});
