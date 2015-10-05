var Sequelize = require('sequelize');
var pg = require('pg');
var database = require('../controllers/database.js');

var User = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
});

User.sync()
.then(function(err) {
    console.log('User table synced');
}).error(function(err) {
    console.log('User NOT synced sadface'), err;
});
