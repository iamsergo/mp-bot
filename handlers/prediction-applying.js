const LatePredictionText = require("../texts/late-prediction");
const SuccessApplyingPredictionText = require("../texts/sucess-applying-prediction");

class PredictionApplyingHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const predictionId = this._msg.text.replace('/prediction-apply ', '');
    const prePrediction = await this._storage.getPrediction(predictionId);
    if(prePrediction.startGameTime > Date.now()) {
      await this._storage.cancelPrediction(predictionId);
      await this._bot.deleteMessage(this._msg.chatId, this._msg.id);
      await this._bot.sendMessage(
        this._msg.chatId,
        new LatePredictionText(prePrediction).asString()
      );
      return;
    }

    const prediction = await this._storage.applyPrediction(predictionId);
    await this._bot.deleteMessage(this._msg.chatId, this._msg.id);
    await this._bot.sendMessage(
      this._msg.chatId,
      new SuccessApplyingPredictionText(prediction).asString()
    );
  }
}

module.exports = PredictionApplyingHandler;
