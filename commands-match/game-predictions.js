const CommandMatch = require('./command-match');

class GamePredictionsCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/game_predictions ',
      'прогнозы на ',
    ];
    super(str, commandStartsWith);
  }
}

module.exports = GamePredictionsCommandMatch;