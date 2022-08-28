const LatePredictionText = require("../texts/late-prediction");
const SuccessApplyingPredictionText = require("../texts/sucess-applying-prediction");

class PredictionApplyingHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async _sendAnswer(text) {
    await this._bot.deleteMessage(this._msg.chatId, this._msg.id);
    await this._bot.sendMessage(this._msg.chatId, text);
  }

  async execute() {
    const predictionId = this._msg.text.replace('/prediction-apply ', '');
    const prediction = await this._storage.applyPrediction(predictionId);
    if(!prediction) {
      await this._storage.cancelPrediction(predictionId);
      await this._sendAnswer(
        new LatePredictionText().asString()
      );
      return;
    }

    await this._sendAnswer(
      new SuccessApplyingPredictionText(prediction).asString()
    );
  }
}

module.exports = PredictionApplyingHandler;
