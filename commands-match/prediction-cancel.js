const CommandMatch = require('./command-match');

class PredictionCancelCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [ '/prediction-cancel' ];
    super(str, commandStartsWith);
  }
}

module.exports = PredictionCancelCommandMatch;
