const HOME_WIN = 0;
const DRAW = 1;
const AWAY_WIN = 2;

class ResultForScore {
  constructor(score) {
    this._home = score[0];
    this._away = score[1];
  }

  value() {
    if(this._home > this._away) return HOME_WIN;
    else if(this._home === this._away) return DRAW;
    else return AWAY_WIN;
  }
}

module.exports = {
  default: ResultForScore,
  HOME_WIN,
  DRAW,
  AWAY_WIN,
};
