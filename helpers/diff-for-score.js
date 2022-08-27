class DiffForScore {
  constructor(score) {
    this._home = score[0];
    this._away = score[1];
  }

  value() {
    return this._home - this._away;
  }
}

module.exports = DiffForScore;
