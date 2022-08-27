const { PredictionApplyingHandler } = require("../");

const applyPrediction = jest.fn(() => ({
  game: {
    home: 'amkal',
    away: '2d',
  },
  score: [1,1],  
}));
const cancelPrediction = jest.fn();
const sendMessage = jest.fn();
const deleteMessage = jest.fn();
const options = {
  storage: { applyPrediction, cancelPrediction },
  bot: { sendMessage, deleteMessage },
  msg: { text: '/prediction-apply prediction-id' },
};

beforeEach(() => {
  cancelPrediction.mockClear();
  applyPrediction.mockClear();
  sendMessage.mockClear();
  deleteMessage.mockClear();
});

test('should not apply prediction', async () => {
  applyPrediction.mockReturnValueOnce(undefined);
  const handler = new PredictionApplyingHandler(options);

  await handler.execute();

  expect(applyPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(cancelPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(deleteMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Матч уже начался'));
});

test('should apply prediction', async () => {
  const handler = new PredictionApplyingHandler(options);

  await handler.execute();

  expect(applyPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(cancelPrediction.mock.calls.length).toBe(0);
  expect(deleteMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Ваш прогноз'));
});
