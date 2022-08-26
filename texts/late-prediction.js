class LatePredictionText {
  constructor(prediction) {
    this._prediction = prediction;
  }

  asString() {
    const text = [
      `Матч "${this._prediction.game.home}"-"${this._prediction.game.away}" уже начался или завершился.`,
      '',
      'Правила прогнозов можно посмотреть командой /rules',
    ].join('\n');
    return text;
  }
}

module.exports = LatePredictionText;
