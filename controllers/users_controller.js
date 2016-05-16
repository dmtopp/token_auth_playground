// set up dependencies
var express = require('express'),
    UsersController = express.Router();

UsersController.route('/login')
  .post(function(req, res, next) {
    res.send('hey, ya logged in!');
  })

UsersController.route('/signup')
  .post(function(req, res, next) {
    res.send('hey, ya signed up!');
  })

module.exports = UsersController;
