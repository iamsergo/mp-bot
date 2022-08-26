const { PredictionMenuText, PredictionApplyingText } = require("../texts");
const { PredictionDataFromText } = require('../helpers');

class PredictionHandler {
  constructor(options) {
    this._storage = options.storage;
    this._bot = options.bot;
    this._msg = options.msg;
  }

  async _sendAboutInvalidMessage() {
    const text = 'Извините, я Вас не понял(\n\n' + new PredictionMenuText().asString();
    await this._bot.sendMessage(this._msg.chat.id, text);
  }

  async _sendMessageForApplying(game, prediction) {
    const prePrediction = await this._storage.createPrediction({
      userId: this._msg.from.id,
      gameId: game.id,
      prediction,
    });

    await this._bot.sendMessage(
      this._msg.chat.id,
      new PredictionApplyingText(game, prediction).asString(),
      {
        reply_markup: JSON.stringify({
          inline_keyboard: [
            [{
              text: '✅ Подтвердить',
              callback_data: `/prediction-apply ${prePrediction.id}`
            }],
            [{
              text: '🚫 Отменить',
              callback_data: `/prediction-cancel ${prePrediction.id}`
            }],
          ]
        })
      },
    );
  }

  async execute() {
    const predictionData = new PredictionDataFromText(this._msg.text).value();
    if(!predictionData) {
      await this._sendAboutInvalidMessage();
      return;
    }
    
    const game = await this._storage.getGameForTeams(predictionData.teams);
    if(!game) {
      await this._sendAboutInvalidMessage();
      return;
    }

    await this._sendMessageForApplying(game, predictionData.score);
  }
}

module.exports = PredictionHandler;
