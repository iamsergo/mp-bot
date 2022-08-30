const { UserPredictionsDataFromText } = require("../helpers");
const { UserPredictionsText } = require("../texts");

class UserPredictionsHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const username = new UserPredictionsDataFromText(this._msg.text).value();
    const predictions = await this._storage.getUserPredictions(username);
    await this._bot.sendMessage(
      this._msg.chat.id,
      new UserPredictionsText(predictions, username).asString()
    );
  }
}

module.exports = UserPredictionsHandler;
