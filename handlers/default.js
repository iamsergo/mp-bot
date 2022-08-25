const { MenuText } = require("../texts");

class DefaultHandler {
  constructor(options) {
    this._bot = options.bot;
    this._msg = options.msg;
  }
  
  async execute() {
    await this._bot.sendMessage(this._msg.chat.id, 'Извините, я Вас не понимаю(');
    await this._bot.sendMessage(this._msg.chat.id, new MenuText().asString());
  }
}

module.exports = DefaultHandler;
