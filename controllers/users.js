// var user = models.User.create;
var models = require('../models');
exports.usersControlller = {
  all: function all(req, res) {
    var users = models.User.all(function(users) {
      return res.status(200).json(users);
    });
  }
}
