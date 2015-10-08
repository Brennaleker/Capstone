var express = require('express');
var router = express.Router();
var user_exports = require('../controllers/users');

router.get('/', function(req, res, next) {
  return user_exports.customersController.all(req, res);
});
