const { PredictionApplyingHandler } = require("../");

const createPrediction = (time = Date.now() + 10000) => ({
  startGameTime: time,
  game: {
    home: 'amkal',
    away: '2d',
  },
  score: [1,1],  
});
const getPrediction = jest.fn(() => createPrediction());
const cancelPrediction = jest.fn();
const applyPrediction = jest.fn(() => createPrediction());
const sendMessage = jest.fn();
const deleteMessage = jest.fn();
const options = {
  storage: { applyPrediction, getPrediction, cancelPrediction },
  bot: { sendMessage, deleteMessage },
  msg: { text: '/prediction-apply prediction-id' },
};

beforeEach(() => {
  getPrediction.mockClear();
  cancelPrediction.mockClear();
  sendMessage.mockClear();
  deleteMessage.mockClear();
});

test('should not apply prediction', async () => {
  const handler = new PredictionApplyingHandler (options);

  await handler.execute();

  expect(getPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(cancelPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(deleteMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Матч "amkal"'));
  expect(applyPrediction.mock.calls.length).toBe(0);
});

test('should apply prediction', async () => {
  getPrediction.mockReturnValueOnce(createPrediction(Date.now() - 10000));
  const handler = new PredictionApplyingHandler(options);

  await handler.execute();

  expect(getPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(cancelPrediction.mock.calls.length).toBe(0);
  expect(applyPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(applyPrediction.mock.calls[0][0]).toBe('prediction-id');
  expect(deleteMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Ваш прогноз'));
});
