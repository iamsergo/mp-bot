const { MenuText } = require("../texts");

class StartHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async _updateUser() {
    await this._storage.updateUser(this._msg.from);
  }

  async _sendMenu() {
    await this._bot.sendMessage(this._msg.chat.id, new MenuText().asString());
  }

  async execute() {
    await this._updateUser();
    await this._sendMenu();
  }
}

module.exports = StartHandler;
