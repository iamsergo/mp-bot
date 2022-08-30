class GameDataFromText {
  constructor(text) {
    this._text = text;
    this._teams = [];
  }

  _removeExtra() {
    const commandStartsWith = [
      '/game_predictions ',
      'прогнозы на ',
    ];
  
    commandStartsWith.forEach(start => {
      this._text = this._text.replace(start, '');
    });

    this._text = this._text
      .replace(' - ', '-')
      .replace(' -', '-')
      .replace('- ', '-');
  }

  _extractData() {
    const [home, away] = this._text.split('-');
    this._teams = [home, away];
  }

  value() {
    this._removeExtra();
    this._extractData();

    return { teams: this._teams };
  }
}

module.exports = GameDataFromText;
