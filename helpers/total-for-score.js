class TotalForScore {
  constructor(score) {
    this._score = score;
  }

  value() {
    return this._score.reduce((t, s) => t + s, 0);
  }
}

module.exports = TotalForScore;
