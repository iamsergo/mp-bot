class PredictionApplyingText {
  constructor(game, prediction) {
    this._game = game;
    this._prediction = prediction;
  }

  asString() {
    const text = [
      `Ваш прогноз на матч "${this._game.home}"-"${this._game.away}" ${this._prediction.join(':')}`,
      '',
      'После подтверждения изменить прогноз будет НЕЛЬЗЯ!',
    ].join('\n');
    return text;
  }
}

module.exports = PredictionApplyingText;
