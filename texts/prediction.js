class PredictionText {
  constructor(prediction) {
    this._prediction = prediction;
  }

  asString() {
    const game = this._prediction.teams.join('-');
    const result = this._prediction.result ? this._prediction.result.join(':') : '?:?';
    const prediction = 'Ваш прогноз:  ' + this._prediction.prediction.join(':');
    let pointsPostfix;
    if(this._prediction.points === null) pointsPostfix = '';
    else if(this._prediction.points === 5) pointsPostfix = '🟢';
    else if(this._prediction.points === 3) pointsPostfix = '🟡';
    else if(this._prediction.points === 2) pointsPostfix = '🟠';
    else if(this._prediction.points === 0) pointsPostfix = '🔴';
    const pointsValue = this._prediction.points !== null ? this._prediction.points : '?';
    const points = `Очки: ${pointsValue} ${pointsPostfix}`;
  return [
    game + ' ' + result,
    prediction,
    points,
  ].join('\n');
  }
}

module.exports = PredictionText;
