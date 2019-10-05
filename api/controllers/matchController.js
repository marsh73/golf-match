'use strict';


var mongoose = require('mongoose');

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