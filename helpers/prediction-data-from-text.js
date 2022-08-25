class PredictionDataFromText {
  constructor(text) {
    this._text = text;
    this._teams = [];
    this._score = [];
    this._isValid = true;
  }

  _removeExtra() {
    const commandStartsWith = [
      '/prediction ',
      'прогноз на ',
    ];
  
    commandStartsWith.forEach(start => {
      this._text = this._text.replace(start, '');
    });

    this._text = this._text
      .replace(' : ', ':')
      .replace(' :', ':')
      .replace(': ', ':')
      .replace(' - ', '-')
      .replace(' -', '-')
      .replace('- ', '-');
  }

  _extractData() {
    this._isValid = false;
    const parts = this._text.split(' ');
    const last = parts[parts.length - 1];

    const score = last.split(':').map(s => s ? +s : NaN);
    if(score.length !== 2) return;
    if(score.some(isNaN)) return;

    const rawTeams = parts.slice(0, parts.length - 1).join(' ');
    const teams = rawTeams.split('-');

    if(teams.length !== 2) return;
    if(teams.some(t => !t)) return;

    this._isValid = true;
    this._score = score;
    this._teams = teams;
  }

  value() {
    this._removeExtra();
    this._extractData();

    return this._isValid ? { teams: this._teams, score: this._score } : null;
  }
}

module.exports = PredictionDataFromText;
