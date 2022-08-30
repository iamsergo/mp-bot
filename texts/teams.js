class TeamsText {
  constructor(teams) {
    this._teams = teams;
  }

  asString() {
    const teamsText = this._teams.map(t => {
      return '▪️ ' + t.name + '(' + t.pseudonames.join(', ') + ')';
    }).join('\n\n');

    const text = [
      '🤹🏻‍♂️🤹🏿‍♂️🤹🏾‍♂️ Команды:',
      teamsText,
    ].join('\n\n')
    return text;
  }
}

module.exports = TeamsText;
