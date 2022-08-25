const { MessageHandler } = require('../');

const trueMatcher = { isTrue() { return true; } };
const falseMatcher = { isTrue() { return false; } };

const execute = jest.fn();
const handler = { execute };

const handle = jest.fn();
const next = { handle };

beforeEach(() => {
  execute.mockClear();
  handle.mockClear();
});

test('should execute next handler in chain', async () => {
  const msg = '';
  const h = new MessageHandler({ matcher: falseMatcher, handler });
  h.setNext(next);

  await h.handle(msg);

  expect(handle.mock.calls.length).toBeGreaterThan(0);
});

test('should use handler', async () => {
  const msg = '';
  const h = new MessageHandler({ matcher: trueMatcher, handler });

  await h.handle(msg);

  expect(execute.mock.calls.length).toBeGreaterThan(0);
});