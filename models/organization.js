var Sequelize = require('sequelize');
var pg = require('pg').native;
var database = require('../controllers/database.js');

var Organization = db.sequelize('organizations', {
  user_id: {
    references: "Users",
    referencesKey: "id"
  },
  organization_name: Sequelize.STRING,
  organization_phone: Seqelize.INTEGER,
  blurb: Sequelize.TEXT,
  population_served: Sequelize.STRING,
  shipping_address_1: Sequelize.STRING,
  shipping_address_2: Sequelize.STRING,
  shipping_city: Sequelize.STRING,
  shipping_state: Sequelize.STRING,
  shipping_postal_code: Sequelize.STRING,
});

// creates any missing tables based on model definition
Organizaton.sync();
