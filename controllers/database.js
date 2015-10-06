var Sequelize = require('sequelize'),
    pg = require('pg'),
    config = require('../db_config'),

    sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: config.dialect
  });

// USER TABLE
var User = sequelize.define('users', {
  username: Sequelize.STRING,
  password: Sequelize.STRING,
  email: Sequelize.STRING,
  first_name: Sequelize.STRING,
  last_name: Sequelize.STRING
});
User.sync()
.then(function(err) {
    console.log('User table synced');
}).error(function(err) {
    console.log('User NOT synced sadface');
});

// ORGANIZATION TABLE
var Organization = sequelize.define('organizations', {
  organization_name: Sequelize.STRING,
  organization_phone: Sequelize.INTEGER,
  blurb: Sequelize.TEXT,
  population_served: Sequelize.STRING,
  shipping_address_1: Sequelize.STRING,
  shipping_address_2: Sequelize.STRING,
  shipping_city: Sequelize.STRING,
  shipping_state: Sequelize.STRING,
  shipping_postal_code: Sequelize.STRING,
});

Organization.belongsTo(User);
Organization.sync()
.then(function(err) {
    console.log('Organization table synced');
}).error(function(err) {
    console.log('Organization NOT synced sadface');
});

// VOLUNTEER TABLE
var Volunteer = sequelize.define('volunteers', {
  bio: Sequelize.TEXT,
  role: Sequelize.STRING,
});

Volunteer.belongsTo(User);
Volunteer.sync()
.then(function(err) {
    console.log('Volunteer table synced');
}).error(function(err) {
    console.log('Volunteer NOT synced sadface');
});

// DONOR TABLE
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

sequelize
.authenticate()
.then(function(err) {
  console.log('Connection has been established successfully.');
}, function (err) {
  console.log('Unable to connect to the database:', err);
});
