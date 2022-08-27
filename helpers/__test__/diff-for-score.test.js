const { DiffForScore } = require("../");

test.each([
  [[3, 2], 1],
  [[2, 2], 0],
  [[2, 3], -1],
])('should work correctly', (score, expected) => {
  expect(new DiffForScore(score).value()).toBe(expected)
});
