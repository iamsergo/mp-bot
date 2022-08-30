const CommandMatch = require('./command-match');

class RulesCommandMatch extends CommandMatch{
  constructor(str) {
    const commandStartsWith = [
      '/rules',
      'правила',
    ];
    super(str, commandStartsWith);
  }

  isTrue() {
    return this._commandStartsWith.some(start => start === this._str);
  }
}

module.exports = RulesCommandMatch;