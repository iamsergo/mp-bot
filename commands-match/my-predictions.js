const CommandMatch = require('./command-match');

class MyPredictionsCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/my_predictions',
      'мои прогнозы',
    ];
    super(str, commandStartsWith);
  }

  isTrue() {
    return this._commandStartsWith.some(start => start === this._str);
  }
}

module.exports = MyPredictionsCommandMatch;