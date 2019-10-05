'use strict';
module.exports = function(app) {
  var match = require('../controllers/matchController');

  // todoList Routes
  app.route('/match')
    .post(match.create_match);

  app.post('/hello', (req, res) => {
    var data = {form: {
          token: process.env.SLACK_AUTH_TOKEN,
          channel: "#general",
          text: "Hi! :wave: \n I'm your new bot."
        }};
    request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
          // Sends welcome message
          res.json();
        });
    });
};