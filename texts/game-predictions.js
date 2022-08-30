const PredictionText = require('./prediction');

class GamePredictionsText {
  constructor(predictions, game) {
    this._predictions = predictions;
    this._game = game;
  }

  asString() {
    const predictionsText = this._predictions.length === 0
      ? 'На эту игру пока нет прогнозов.'
      : this._predictions.map(p => {
          let pointsPostfix;
          if(p.points === null) pointsPostfix = '';
          else if(p.points === 5) pointsPostfix = '🟢';
          else if(p.points === 3) pointsPostfix = '🟡';
          else if(p.points === 2) pointsPostfix = '🟠';
          else if(p.points === 0) pointsPostfix = '🔴';
          const pointsValue = p.points !== null ? p.points : '?';
          const points = `Очки: ${pointsValue} ${pointsPostfix}`;
          return [
            `@${p.username}`,
            `Прогноз:  ${p.prediction.join(':')}`,
            points,
          ].join('\n');
      }).join('\n\n');

    const score = this._game.result ? this._game.result.join(':') : '';
    const text = [
      `🎯 Прогнозы на ${this._game.teams.map(t => `"${t}"`).join('-')} ${score}:`,
      predictionsText,
    ].join('\n\n')
    return text;
  }
}

module.exports = GamePredictionsText;
