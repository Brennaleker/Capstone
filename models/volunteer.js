// var Sequelize = require('sequelize');
// var pg = require('pg').native;
// var database = require('../controllers/database.js');
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Volunteer = sequelize.define('volunteers', {
    bio: DataTypes.TEXT,
    role: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models){
        Volunteer.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowull: false
          }
        });
      }
    }
  });
  return Volunteer;
};


// creates any missing tables based on model definition
// Volunteer.sync();
