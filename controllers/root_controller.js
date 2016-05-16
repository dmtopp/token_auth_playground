// require our dependencies
var express = require('express'),
    RootController = express.Router();

RootController.route('/')
  .get(function(req, res, next) {
    res.render('login', {});
  })

RootController.route('/message')
  .get(function(req, res, next) {
    res.render('message', {});
  })
  .post(function(req, res, next) {
    res.send('ya posted a new message, eh?');
  })

RootController.route('/all')
  .get(function(req, res, next) {
    res.render('all', {});
  })
module.exports = RootController;
