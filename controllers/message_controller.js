// require our dependencies
require('dotenv').config();
var express           = require('express'),
    jwt               = require('jsonwebtoken'),
    MessageController = express.Router();

MessageController.use(function(req, res, next) {
  console.log(req.body);
  console.log(req.headers['x-access-token']);
  console.log(req.query.token);
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if (token) {
    jwt.verify(token, process.env.SECRET, function(err, decoded) {
      if (err) {
        res.send(err);
      } else {
        req.decoded = decoded;
        // next();
      }
    })
  } else {
    return res.status(403).send('No token!');
  }
})

MessageController.route('/')
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
