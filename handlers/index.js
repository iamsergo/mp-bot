const MessageHandler = require('./message');
const StartHandler = require('./start');
const DefaultHandler = require('./default.js');
const PredictionHandler = require('./prediction');
const PredictionCancelHandler = require('./prediction-cancel');
const PredictionApplyingHandler = require('./prediction-applying');
const RatingHandler = require('./rating');
const MyPredictionsHandler = require('./my-predictions');
const UserPredictionsHandler = require('./user-predictions');
const GamePredictionsHandler = require('./game-predictions');
const TeamsHandler = require('./teams');
const RulesHandler = require('./rules');

module.exports = {
  MessageHandler,
  StartHandler,
  DefaultHandler,
  PredictionHandler,
  PredictionCancelHandler,
  PredictionApplyingHandler,
  RatingHandler,
  MyPredictionsHandler,
  UserPredictionsHandler,
  GamePredictionsHandler,
  TeamsHandler,
  RulesHandler,
};
