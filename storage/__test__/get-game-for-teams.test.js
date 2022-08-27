const GetGamesForTeams = require('../get-game-for-teams');

const query = jest.fn();
const db = { query };
const teams = ['2d', 'brokeboys'];

beforeEach(() => {
  query.mockClear();
});

test('should execute correctly', async () => {
  query.mockReturnValueOnce({ rows: [] });

  await new GetGamesForTeams(db, { teams }).execute();

  expect(query.mock.calls.length).toBeGreaterThan(0);
  expect(query.mock.calls[0][0]).toEqual(expect.stringContaining('home_id = '));
  expect(query.mock.calls[0][1]).toEqual(teams);
});
