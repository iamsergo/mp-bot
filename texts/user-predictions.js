const PredictionText = require('./prediction');

class UserPredictionsText {
  constructor(predictions, username) {
    this._predictions = predictions;
    this._username = username;
  }

  asString() {
    const predictionsText = this._predictions.length === 0
      ? `У @${this._username} пока нет прогнозов.`
      : this._predictions.map(p => new PredictionText(p).asString()).join('\n\n');

    const text = [
      `🎯 Прогнозы @${this._username}:`,
      predictionsText,
    ].join('\n\n')
    return text;
  }
}

module.exports = UserPredictionsText;
