const { RatingText } = require("../texts");

class RatingHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const rating = await this._storage.getRating();
    const ratingForUser = await this._storage.getRatingForUser(this._msg.chat.id);
    console.log(ratingForUser);
    await this._bot.sendMessage(
      this._msg.chat.id,
      new RatingText(rating, ratingForUser).asString()
    );
  }
}
module.exports = RatingHandler;
