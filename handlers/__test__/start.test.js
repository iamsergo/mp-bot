const { StartHandler } = require("../");

const updateUser = jest.fn();
const sendMessage = jest.fn();
const options = {
  storage: { updateUser },
  bot: { sendMessage },
  msg: { chat: {}, from: {} },
};

test('should use storage', async () => {
  const handler = new StartHandler(options);

  await handler.execute();

  expect(updateUser.mock.calls.length).toBeGreaterThan(0);
});

test('should use bot', async () => {
  const handler = new StartHandler(options);

  await handler.execute();

  expect(sendMessage.mock.calls.length).toBeGreaterThan(0);
});