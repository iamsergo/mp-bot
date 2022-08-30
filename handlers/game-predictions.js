const { GameDataFromText } = require("../helpers");
const { GamePredictionsText } = require("../texts");

class GamePredictionsHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async execute() {
    const gameData = new GameDataFromText(this._msg.text).value();
    const game = await this._storage.getGameByTeams(gameData.teams);
    if(!game) {
      await this._bot.sendMessage(
        this._msg.chat.id,
        'Игра не найдена.'
      );
      return;      
    }
    
    const predictions = await this._storage.getPredictionsForGame(game.id);
    await this._bot.sendMessage(
      this._msg.chat.id,
      new GamePredictionsText(predictions, game).asString()
    );
  }
}

module.exports = GamePredictionsHandler;
