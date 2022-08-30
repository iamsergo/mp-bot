const CommandMatch = require('./command-match');

class RatingCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/rating',
      'рейтинг',
    ];
    super(str, commandStartsWith);
  }

  isTrue() {
    return this._commandStartsWith.some(start => start === this._str);
  }
}

module.exports = RatingCommandMatch;