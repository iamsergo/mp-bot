class SuccessApplyingPredictionText {
  constructor(prediction) {
    this._prediction = prediction;
  }

  asString() {
    const { value, teams: [home, away] } = this._prediction;
    const text = [
      `Ваш прогноз ${value.join(':')} на матч "${home}"-"${away}" подтвержден ✔️`,
    ].join('\n');
    return text;
  }
}

module.exports = SuccessApplyingPredictionText;
