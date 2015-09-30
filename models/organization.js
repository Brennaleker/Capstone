var Sequelize = require('sequelize')
var db = new Sequelize('db', null, null, {
  dialect: 'postgres'
})

var Organization = db.define('organization', {
  user_id: {
    references: "Users",
    referencesKey: "id"
  },
  organization_name: {
    type: Sequelize.STRING
  },
  organization_phone: {
    type: Seqelize.integer
  },
  blurb: {
    type: Sequelize.TEXT
  },
  shipping_address_1: {
    type: Sequelize.STRING
  },
  shipping_address_2: {
    type: Sequelize.STRING
  },
  shipping_city: {
    type: Sequelize.STRING
  },
  shipping_state: {
    type: Sequelize.STRING
  },
  shipping_postal_code: {
    type: Sequelize.STRING
  }
})
