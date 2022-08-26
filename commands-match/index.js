const PredictionCommandMatch = require('./prediction');
const StartCommandMatch = require('./start');
const AlwaysTrueMatcher = require('./always-true');
const PredictionApplyingCommandMatch = require('./prediction-apply');
const PredictionCancelCommandMatch = require('./prediction-cancel');

module.exports = {
  PredictionCommandMatch,
  StartCommandMatch,
  AlwaysTrueMatcher,
  PredictionApplyingCommandMatch,
  PredictionCancelCommandMatch,
};
