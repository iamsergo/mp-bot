const { GamesText } = require("../texts");

class GamesHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const games = await this._storage.getGames();
    await this._bot.sendMessage(
      this._msg.chat.id,
      new GamesText(games).asString()
    );
  }
}

module.exports = GamesHandler;
