const jwt = require('jsonwebtoken');

exports.generateToken = function(payload) {
  const secret = process.env.FITNESS_SECRET;
  return jwt.sign(payload, secret);
}

exports.dissectDate = function(date) {
  return [year, month, day] = date.split('-');
}
