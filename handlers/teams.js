const { TeamsText } = require("../texts");

class TeamsHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const teams = await this._storage.getTeams();
    await this._bot.sendMessage(
      this._msg.chat.id,
      new TeamsText(teams).asString()
    );
  }
}
module.exports = TeamsHandler;
