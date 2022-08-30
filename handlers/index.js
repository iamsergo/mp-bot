const MessageHandler = require('./message');
const StartHandler = require('./start');
const DefaultHandler = require('./default.js');
const PredictionHandler = require('./prediction');
const PredictionCancelHandler = require('./prediction-cancel');
const PredictionApplyingHandler = require('./prediction-applying');
const RatingHandler = require('./rating');
const MyPredictionsHandler = require('./my-predictions');
const UserPredictionsHandler = require('./user-predictions');

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
};
