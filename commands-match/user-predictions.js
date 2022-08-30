const CommandMatch = require('./command-match');

class UserPredictionsCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/user_predictions ',
      'прогнозы ',
    ];
    super(str, commandStartsWith);
  }
}

module.exports = UserPredictionsCommandMatch;