// var Sequelize = require('sequelize');
// var pg = require('pg');
// var database = require('../controllers/database.js');
"use strict";

module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    email: DataTypes.STRING,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.Donor, models.Volunteer, models.Organization)
      }
    }
  });

  return User;
};
//
// User.sync()
// .then(function(err) {
//     console.log('User table synced');
// }).error(function(err) {
//     console.log('User NOT synced sadface'), err;
// });
