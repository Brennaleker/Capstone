// var Sequelize = require('sequelize')
// var db = new Sequelize('db', null, null, {
//   dialect: 'postgres'
// })
//
//
//
// var donor_fields = [
//   ['user_id', 'integer'],
//   ['billing_address_1', 'text'],
//   ['billing_address_2', 'text'],
//   ['billing_city', 'text'],
//   ['billing_state', 'text'],
//   ['billing_zip', 'integer'],
//   ['billing_address_2', 'text'],
//   ['donor_phone', 'integer'],
//   ['card_number', 'integer'],
//   ['expiration_date', 'integer'],
//   ['ccv', 'integer']
//
// ]
//
// var Donor = db.define('donor', {
//   id: {
//     type: Sequelize.INTEGER,
//     primaryKey: true,
//     autoIncrement: true
//   },
//   user_id: {
//     type: Sequelize.INTEGER
//   },
//   organization_name: {
//     type: Sequelize.STRING
//   },
//   organization_phone: {
//     type: Seqelize.integer
//   },
//   blurb: {
//     type: Sequelize.TEXT
//   },
//   shipping_address_1: {
//     type: Sequelize.STRING
//   },
//   shipping_address_2: {
//     type: Sequelize.STRING
//   },
//   shipping_city: {
//     type: Sequelize.STRING
//   },
//   shipping_state: {
//     type: Sequelize.STRING
//   },
//   shipping_postal_code: {
//     type: Sequelize.STRING
//   }
// })
