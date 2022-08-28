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

  async _sendAboutNotAbilityToPrediction() {
    const text = [
      'Вы уже сделали прогноз на данный матч, либо он уже начался.',
    ].join('\n');
    await this._bot.sendMessage(this._msg.chat.id, text);
  }

  async _sendAboutHavingPredictionYet() {
    const text = [
      'Вы уже сделали прогноз на данный матч. Для одного матча доступен один прогноз!',
      '',
      'Чтобы посмотреть свои прогнозы используйте /predictions',
    ].join('\n');
    await this._bot.sendMessage(this._msg.chat.id, text);
  }

  async _sendMessageForApplying(prePrediction, game, score) {
    await this._bot.sendMessage(
      this._msg.chat.id,
      new PredictionApplyingText(game, score).asString(),
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
      await this._sendAboutNotAbilityToPrediction();
      return;
    }

    const userId = this._msg.from.id;
    const gameId = game.id;
    const yetExist = await this._storage.checkIfPredictionExist({userId, gameId});
    if(yetExist) {
      await this._sendAboutHavingPredictionYet();
      return;
    }

    const prePrediction = await this._storage.createPrediction({
      userId,
      gameId,
      prediction: predictionData.score,
    });
    await this._sendMessageForApplying(prePrediction, game.id, predictionData.score);
  }
}

module.exports = PredictionHandler;
