var Sequelize = require('sequelize');
var pg = require('pg').native;
var database = require('../controllers/database.js');

var Volunteer = sequelize.define('volunteers', {
  user_id: {
    references: "Users",
    referencesKey: "id"
  },
  bio: Sequelize.TEXT,
  role: Seqelize.STRING
});

// creates any missing tables based on model definition
Volunteer.sync();
