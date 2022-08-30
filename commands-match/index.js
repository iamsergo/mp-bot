const PredictionCommandMatch = require('./prediction');
const StartCommandMatch = require('./start');
const AlwaysTrueMatcher = require('./always-true');
const PredictionApplyingCommandMatch = require('./prediction-apply');
const PredictionCancelCommandMatch = require('./prediction-cancel');
const RatingCommandMatch = require('./rating');
const MyPredictionsCommandMatch = require('./my-predictions');
const UserPredictionsCommandMatch = require('./user-predictions');
const GamePredictionsCommandMatch = require('./game-predictions');
const TeamsCommandMatch = require('./teams');

module.exports = {
  PredictionCommandMatch,
  StartCommandMatch,
  AlwaysTrueMatcher,
  PredictionApplyingCommandMatch,
  PredictionCancelCommandMatch,
  RatingCommandMatch,
  MyPredictionsCommandMatch,
  UserPredictionsCommandMatch,
  GamePredictionsCommandMatch,
  TeamsCommandMatch,
};
