"use-strict";

var pg = require('pg'),
    db_env = process.env.DB || 'development',
    db = new sqlite3.Database('db/' + db_env + '.db');

var movies = require('./users'); // requires in movies.json file
var user_statement = db.prepare( // we will use this statement later
  "INSERT INTO MOVIES(title, overview, release_date, inventory, inventory_available) \
  VALUES( ?, ?, ?, ?, ?);"
);
