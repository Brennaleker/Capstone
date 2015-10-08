// var Sequelize = require('sequelize');
// var pg = require('pg').native;
// var database = require('../controllers/database.js');
"use strict";

module.exports = function(sequelize, DataTypes) {
  var Organization = sequelize.define('Organization', {
    organization_name: DataTypes.STRING,
    organization_phone: DataTypes.INTEGER,
    blurb: DataTypes.TEXT,
    population_served: DataTypes.STRING,
    shipping_address_1: DataTypes.STRING,
    shipping_address_2: DataTypes.STRING,
    shipping_city: DataTypes.STRING,
    shipping_state: DataTypes.STRING,
    shipping_postal_code: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models){
        Organization.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            allowull: false
          }
        });
      }
    }
  });
  return Organization;
};

// Organization.belongsTo(User);
//
// // creates any missing tables based on model definition
// Organizaton.sync();
