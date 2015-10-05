var Sequelize = require('sequelize');
var pg = require('pg').native;
var database = require('../controllers/database.js');

var Donor = [
  ['billing_address_1', 'text'],
  ['billing_address_2', 'text'],
  ['billing_city', 'text'],
  ['billing_state', 'text'],
  ['billing_zip', 'integer'],
  ['phone', 'integer']
]
