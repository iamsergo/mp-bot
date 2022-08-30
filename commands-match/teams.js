const CommandMatch = require('./command-match');

class TeamsCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [ '/teams', 'команды' ];
    super(str, commandStartsWith);
  }

  isTrue() {
    return this._commandStartsWith.some(start => start === this._str);
  }
}

module.exports = TeamsCommandMatch;