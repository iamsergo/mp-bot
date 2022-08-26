const CommandMatch = require('./command-match');

class PredictionApplyingCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [ '/prediction-apply' ];
    super(str, commandStartsWith);
  }
}

module.exports = PredictionApplyingCommandMatch;
