class SuccessApplyingPredictionText {
  constructor(prediction) {
    this._prediction = prediction;
  }

  asString() {
    const text = [
      `Ваш прогноз ${this._prediction.score.join(':')} на матч "${this._prediction.game.home}"-"${this._prediction.game.away}" подтвержден.`,
    ].join('\n');
    return text;
  }
}

module.exports = SuccessApplyingPredictionText;
