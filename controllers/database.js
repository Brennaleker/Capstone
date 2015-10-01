var Sequelize = require('sequelize');
var pg = require('pg');
var config = require('../db_config');

var sequelize = new Sequelize(config.database, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect
});
