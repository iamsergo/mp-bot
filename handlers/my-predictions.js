const { MyPredictionsText } = require("../texts");

class MyPredictionsHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const predictions = await this._storage.getMyPredictions(this._msg.chat.id);
    await this._bot.sendMessage(
      this._msg.chat.id,
      new MyPredictionsText(predictions).asString()
    );
  }
}

module.exports = MyPredictionsHandler;
