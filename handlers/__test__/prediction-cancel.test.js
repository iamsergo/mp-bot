const { PredictionCancelHandler } = require("../");

const cancelPrediction = jest.fn();
const sendMessage = jest.fn();
const deleteMessage = jest.fn();
const options = {
  storage: { cancelPrediction },
  bot: { sendMessage, deleteMessage },
  msg: { text: '/prediction-cancel/prediction-id' },
};

test('should works normal', async () => {
  const handler = new PredictionCancelHandler(options);

  await handler.execute();

  expect(cancelPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(cancelPrediction.mock.calls[0][0]).toBe('prediction-id');
  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
  expect(deleteMessage.mock.calls.length).toBeGreaterThan(0);
});
