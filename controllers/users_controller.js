// set up dependencies
require('dotenv').config();
var express         = require('express'),
    UsersController = express.Router(),
    User            = require('../models/User'),
    jwt             = require('jsonwebtoken');

UsersController.route('/login')
  .post(function(req, res, next) {
    User.findOne({ username: req.body.username }, function(err, user) {
      if (err) res.send(err);
      else if (!user) res.send('No user found!');
      else if (user.password != req.body.password) res.send('Sorry, wrong password.');
      else {
        var profile = {
          username: req.body.username,
          awesome: true
        }
        var token = jwt.sign(profile, process.env.SECRET, { expiresIn: 60*60 });
        res.json({ token: token,
                   success: true,
                   message: 'hey, ya logged in!'});
      }
    })

  })

UsersController.route('/signup')
  .post(function(req, res, next) {
    User.create({ username: req.body.username, password: req.body.password }, function(err, user) {
      if (err) console.log(err);
      else console.log('Success! ' + user);
      res.send('hey, ya signed up! ' + user.username);
    });

  })



module.exports = UsersController;
