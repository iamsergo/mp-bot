const MessageHandler = require('./message');
const StartHandler = require('./start');
const DefaultHandler = require('./default.js');
const PredictionHandler = require('./prediction');
const PredictionCancelHandler = require('./prediction-cancel');

module.exports = {
  MessageHandler,
  StartHandler,
  DefaultHandler,
  PredictionHandler,
  PredictionCancelHandler,
};
