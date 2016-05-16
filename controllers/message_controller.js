// require our dependencies
var express           = require('express'),
    MessageController = express.Router();

MessageController.route('/message')
  .get(function(req, res, next) {
    res.render('message', {});
  })
  .post(function(req, res, next) {
    res.send('ya posted a new message, eh?');
  })

MessageController.route('/all')
  .get(function(req, res, next) {
    res.render('all', {});
  })

module.exports = MessageController;
