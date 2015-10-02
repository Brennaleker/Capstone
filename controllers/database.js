var Sequelize = require('sequelize'),
    pg = require('pg'),
    config = require('../db_config'),

    sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
  }),
  User = sequelize.import(../models)

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
}, function (err) {
  console.log('Unable to connect to the database:', err);
});
