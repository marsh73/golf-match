'use strict';
module.exports = function(app) {
  var match = require('../controllers/matchController');

  // todoList Routes
  app.route('/match')
    .post(match.create_match);

  app.route('/hello')
    .post(match.say_hello);
};