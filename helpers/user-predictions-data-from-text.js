class UserPredictionsDataFromText {
  constructor(text) {
    this._text = text;
  }

  value() {
    const commandStartsWith = [
      '/user_predictions ',
      'прогнозы ',
    ];
    commandStartsWith.forEach(start => {
      this._text = this._text.replace(start, '')
    });
    return this._text.replace('@', '');
  }
}

module.exports = UserPredictionsDataFromText;
