const UpdateUser = require('../update-user');

const query = jest.fn();
const db = { query };
const user = { id: 17, firstName: 'a', username: 'q' };

beforeEach(() => {
  query.mockClear();
});

test('should create user', async () => {
  query.mockReturnValueOnce({ rows: [] });

  await new UpdateUser(db, { user }).execute();

  expect(query.mock.calls.length).toBe(2);
  expect(query.mock.calls[1][0]).toEqual(expect.stringContaining('INSERT INTO'));
});

test('should update user', async () => {
  query.mockReturnValueOnce({ rows: [{ id: 13 }] });

  await new UpdateUser(db, { user }).execute();

  expect(query.mock.calls.length).toBe(2);
  expect(query.mock.calls[1][0]).toEqual(expect.stringContaining('UPDATE'));
});