var request = require('supertest'),
    assert = require('assert'),
    app = require('../../app'),
    pg = require('pg'),
    agent = request.agent(app),
    User = require('../../models/user.js');


  describe("GET '/users'", function() {
    it("knows about the route", function(done) {
      agent.get('/').set('Accept', 'application/json')
        .expect('Content-Type', /application\/json/)
        .expect(200, function(error, result) {
          assert.equal(error, undefined);
          done();
        });
    });
  });
