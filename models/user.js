var Sequelize = require('sequelize')
var db = new Sequelize('db', {
  dialect: 'postgres'
})

var User = db.define('user', {
  username: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.STRING
  },
  email: {
    type: Sequelize.STRING
  },
  first_name: {
    type: Sequelize.STRING
  },
  last_name: {
    type: Sequelize.STRING
  }
})
