const { TotalForScore } = require("../");

test.each([
  [[3, 2], 5],
  [[2, 2], 4],
  [[0, 0], 0],
])('should work correctly', (score, expected) => {
  expect(new TotalForScore(score).value()).toBe(expected)
});
