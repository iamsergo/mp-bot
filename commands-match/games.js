const CommandMatch = require('./command-match');

class GamesCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/games',
      'игры',
    ];
    super(str, commandStartsWith);
  }

  isTrue() {
    return this._commandStartsWith.some(start => start === this._str);
  }
}

module.exports = GamesCommandMatch;