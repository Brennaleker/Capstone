// var Sequelize = require('sequelize');
// var pg = require('pg').native;
// var database = require('../controllers/database.js');
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Donor = sequelize.define('donors', {
    billing_address_1: DataTypes.TEXT,
    billing_address_2: DataTypes.TEXT,
    billing_city: DataTypes.TEXT,
    billing_state: DataTypes.TEXT,
    billing_zip: DataTypes.INTEGER,
    phone: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Donor.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowull: false
          }
        });
      }
    }
  });

  return User;
)};
