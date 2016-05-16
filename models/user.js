var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: true },
  messages: { type: Array, required: false }
})

module.exports = mongoose.model('User', UserSchema);
