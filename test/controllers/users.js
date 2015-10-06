var request = require('supertest'),
    assert = require('assert'),
    app = require('../../app'),
    pg = require('pg'),
    agent = request.agent(app),
    database = require('../../controllers/database.js');
    // user_keys = ['id', 'name', 'registered_at', 'address', 'city', 'state', 'postal_code', 'phone', 'account_credit'];

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
