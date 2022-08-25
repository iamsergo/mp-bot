const CommandMatch = require('./command-match');

class PredictionCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/prediction ',
      'прогноз ',
      'прогноз на ',
    ];
    super(str, commandStartsWith);
  }
}

module.exports = PredictionCommandMatch;