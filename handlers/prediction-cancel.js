const { MenuText } = require("../texts");

class PredictionCancelHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const predictionId = this._msg.text.replace('/prediction-cancel/', '');
    await this._storage.cancelPrediction(predictionId);
    await this._bot.deleteMessage(this._msg.chatId, this._msg.id);
    await this._bot.sendMessage(this._msg.chatId, new MenuText().asString());
  }
}

module.exports = PredictionCancelHandler;
