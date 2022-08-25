const { PredictionHandler } = require("../");

const createPrediction = jest.fn(() => ({ id: 'prd-id' }));
const getGameForTeams = jest.fn(() => ({ id: 'game-id', home: 'Amkal', away: '2Drots' }));
const sendMessage = jest.fn();
const createOptions = (text) => ({
  storage: { createPrediction, getGameForTeams },
  bot: { sendMessage },
  msg: { chat: {}, from: {}, text },
});

beforeEach(() => {
  getGameForTeams.mockClear();
  sendMessage.mockClear();
});

describe('should send about invalid message', () => {
  test('when message is invalid', async () => {
    const options = createOptions('/prediction амкал -pp :2');
    const handler = new PredictionHandler(options);

    await handler.execute();

    expect(getGameForTeams.mock.calls.length).toBe(0);
    expect(createPrediction.mock.calls.length).toBe(0);
    expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
    expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Извините, '));
  });
  test('when game not found', async () => {
    getGameForTeams.mockReturnValueOnce(null);
    const options = createOptions('/prediction амкал-pp 1:2');
    const handler = new PredictionHandler(options);

    await handler.execute();

    expect(getGameForTeams.mock.calls.length).toBeGreaterThan(0);
    expect(createPrediction.mock.calls.length).toBe(0);
    expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
    expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Извините, '));
  });
});

test('should send message for applying prediction', async () => {
  const options = createOptions('/prediction амкал-pp 1:2');
  const handler = new PredictionHandler(options);

  await handler.execute();

  expect(getGameForTeams.mock.calls.length).toBeGreaterThan(0);
  expect(createPrediction.mock.calls.length).toBeGreaterThan(0);
  expect(createPrediction.mock.calls[0][0]).toEqual({
    userId: options.msg.from.id,
    gameId: 'game-id',
    prediction: [1, 2],
  });
  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
  expect(sendMessage.mock.calls[0][1]).toEqual(expect.stringContaining('Ваш'));
});