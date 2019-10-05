'use strict';

require('dotenv').config();
const request = require("request");

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

exports.create_match = function(req, res) {
  // var match_info = new Task(req.body);

  let players = req.body.players;
  let size = req.body.size || 4;

  shuffle(players);
  shuffle(players);
  shuffle(players);

  let match = [];
  while(players.length) {
    let team = players.splice(0, size);
    match.push(team);
  }

  res.json(match)
};

exports.say_hello = function(req, res) {
  var data = {form: {
        token: process.env.SLACK_AUTH_TOKEN,
        channel: "#general",
        text: "Hi! :wave: \n I'm your new bot."
      }};
  request.post('https://slack.com/api/chat.postMessage', data, function (error, response, body) {
        // Sends welcome message
        res.json();
      });
  };