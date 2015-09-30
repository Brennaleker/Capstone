var Sequelize = require('sequelize')
var db = new Sequelize('db', null, null, {
  dialect: 'postgres'
})

var Volunteer = db.define('volunteer', {
  user_id: {
    references: "Users",
    referencesKey: "id"
  },
  bio: {
    type: Sequelize.TEXT
  },
  role: {
    type: Seqelize.STRING
  }
})
