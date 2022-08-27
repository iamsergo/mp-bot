const { TotalForScore, ResultForScore, DiffForScore } = require("../helpers");

class Prediction {
  constructor(prediction) {
    this._userId = prediction.userId;
    this._gameId = prediction.gameId,
    this._value = prediction.prediction;
  }

  asObject() {
    return {
      user_id: this._userId,
      game_id: this._gameId,
      value: this._value,
      total: new TotalForScore(this._value).value(),
      result: new ResultForScore(this._value).value(),
      diff: new DiffForScore(this._value).value(),
    };
  }
}

module.exports = Prediction;
