class CommandMatch {
  constructor(str, commandStartsWith) {
    this._str = str;
    this._commandStartsWith = commandStartsWith;
  }

  isTrue() {
    return this._commandStartsWith
      .some(start => this._str.startsWith(start));
  }
}

module.exports = CommandMatch;