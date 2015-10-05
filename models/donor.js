var Sequelize = require('sequelize');
var pg = require('pg').native;
var database = require('../controllers/database.js');

var Donor = sequelize.define('donors', {
  billing_address_1: Sequelize.TEXT,
  billing_address_2: Sequelize.TEXT,
  billing_city: Sequelize.TEXT,
  billing_state: Sequelize.TEXT,
  billing_zip: Sequelize.INTEGER,
  phone: Sequelize.INTEGER
});

Donor.belongsTo(User);
Donor.sync()
.then(function(err) {
    console.log('Donor table synced');
}).error(function(err) {
    console.log('Donor NOT synced sadface');
});
