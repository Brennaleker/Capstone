var Sequelize = require('sequelize');
var pg = require('pg').native;
var database = require('../controllers/database.js');

var User = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
});

// creates any missing tables based on model definition
User.sync();
