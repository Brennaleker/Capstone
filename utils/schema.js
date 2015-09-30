var pg = require('pg');
var connectionString = process.env.DATABASE_URL || 'postgres://localhost:3000/tbd';

var client = new pg.Client(connectionString);
client.connect();
var query = client.query('CREATE TABLE users(id SERIAL PRIMARY KEY, text VARCHAR(40) not null, complete BOOLEAN)');
query.on('end', function() { client.end(); });

var user_fields = [
  ['username', 'text'],
  ['password', 'text'],
  ['email', 'text'],
  ['first_name', 'integer'],
  ['last_name', 'integer'],
  ['registered_at', 'integer']
]

var organization_fields = [
  ['user_id', 'integer'],
  ['organization_name', 'text'],
  ['blurb', 'text'],
  ['address_1', 'text'],
  ['address_2', 'text'],
  ['state', 'text'],
  ['postal_code', 'integer'],
  ['phone', 'integer']
]

var volunteer_fields = [
  ['user_id', 'integer'],
  ['bio', 'text'],
  ['role', 'text']
]



// I want these to work somewhat how rake db:reset works, so I need to do three things:
// db.serialize will make sure that these things happen in order (otherwise
// they would execute asynchronously)
db.serialize(function() {
  // 1. drop existing tables  (run means, do this right now!)
  db.run("DROP TABLE IF EXISTS movies;");
  db.run("DROP TABLE IF EXISTS customers;");
  db.run("DROP TABLE IF EXISTS rentals;");

  // 2. create fresh versions of those tables
  db.run("CREATE TABLE movies (id INTEGER PRIMARY KEY);");
  db.run("CREATE TABLE customers (id INTEGER PRIMARY KEY);");
  db.run("CREATE TABLE rentals (id INTEGER PRIMARY KEY);");
          // FOREIGN KEY (customer_id) REFERENCES customer(id), \
          // FOREIGN KEY (movie_id) REFERENCES movie(id));");


  // 3. add the columns to those tables
  // CREATE MOVIES TABLE COLUMNS
  for(var i = 0; i < movie_fields.length; i++) {
    var movie_name = movie_fields[i][0],
        movie_type = movie_fields[i][1];

    db.run("ALTER TABLE movies ADD COLUMN " + movie_name + " " + movie_type + ";");
  }

  // CREATE CUSTOMERS TABLE COLUMNS
  for(var l = 0; l < customer_fields.length; l++) {
    var customer_name = customer_fields[l][0],
        customer_type = customer_fields[l][1];

    db.run("ALTER TABLE customers ADD COLUMN " + customer_name + " " + customer_type + ";");
  }

  // CREATE RENTALS TABLE COLUMNS
  for(var k = 0; k < rental_fields.length; k++) {
    var rental_name = rental_fields[k][0],
        rental_type = rental_fields[k][1];
        default_value = (rental_fields[k][2] === undefined) ? "" : rental_fields[k][2];


    db.run("ALTER TABLE rentals ADD COLUMN " +
            rental_name + " " + rental_type + " " + default_value + ";");
  }
});

db.close();
