const { RulesText } = require("../texts");

class RulesHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    await this._bot.sendMessage(
      this._msg.chat.id,
      new RulesText().asString()
    );
  }
}

module.exports = RulesHandler;
