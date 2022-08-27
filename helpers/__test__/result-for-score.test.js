const { ResultForScore } = require("../");
const { HOME_WIN, DRAW, AWAY_WIN } = require('../result-for-score');

test.each([
  [[3, 2], HOME_WIN],
  [[2, 2], DRAW],
  [[2, 3], AWAY_WIN],
])('should work correctly', (score, expected) => {
  expect(new ResultForScore(score).value()).toBe(expected)
});
