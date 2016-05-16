// require our dependencies
var express = require('express'),
    RootController = express.Router();

RootController.route('/')
  .get(function(req, res, next) {
    res.render('login', {});
  })

module.exports = RootController;
