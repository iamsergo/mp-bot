const PredictionText = require('./prediction');

class MyPredictionsText {
  constructor(predictions) {
    this._predictions = predictions;
  }

  asString() {
    const predictionsText = this._predictions.length === 0
      ? 'У вас пока нет прогнозов.'
      : this._predictions.map(p => new PredictionText(p).asString()).join('\n\n');

    const text = [
      '🎯 Ваши прогнозы:',
      predictionsText,
    ].join('\n\n')
    return text;
  }
}

module.exports = MyPredictionsText;
