var request = require('supertest'),
    assert = require('assert'),
    app = require('../../app'),
    pg = require('pg'),
    agent = request.agent(app),
    User = require('../../models/user.js');

describe("users controller", function() {
  var user, db_cleaner;
  var user_keys = ['id', 'title', 'overview', 'release_date', 'inventory', 'inventory_available'];
  beforeEach(function(done) {
    user = new User();

    db_cleaner = new sqlite3.Database('db/test.db');
    db_cleaner.serialize(function() {
      db_cleaner.exec(
        "BEGIN; \
        DELETE FROM movies; DELETE FROM customers; DELETE FROM rentals; \
        INSERT INTO rentals(check_out, check_in, due_date, overdue, movie_title, customer_id) \
        VALUES('2015-06-16', '2015-06-17', '2015-06-19', 0, 'Jaws', 1), \
        ('2015-06-10', '2015-06-12', '2015-06-13', 0, 'Jaws', 2),\
        ('2015-06-16', null, '2015-06-19', 1, 'Alien', 1); \
        INSERT INTO movies(title, overview, release_date, inventory, inventory_available) \
        VALUES('Jaws', 'omg sharks!',   '1975-06-19', 6, 6), \
              ('Alien', 'omg aliens!', 1979-05-25, 4, 4); \
        INSERT INTO customers(name, registered_at, address, city, state, postal_code, phone, account_credit) \
        VALUES('Harry', '2015-06-16', '1234', 'Seattle', 'WA', '98103', '1234567', 123),\
        ('Hermione', '2015-06-10', '1234', 'Pasadena', 'CA', '97123', '7654321', 231);\
        COMMIT;"
        , function(err) {
          db_cleaner.close();
          done();
        }
      );
    });
  });

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
