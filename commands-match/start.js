const CommandMatch = require('./command-match');

class StartCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/start',
      'меню',
    ];
    super(str, commandStartsWith);
  }

  isTrue() {
    return this._commandStartsWith.some(start => start === this._str);
  }
}

module.exports = StartCommandMatch;