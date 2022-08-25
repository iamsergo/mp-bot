const { StartCommandMatch } = require('../');


test('should match for "/start"', () => {
  const text = '/start';
  expect(new StartCommandMatch(text).isTrue()).toBeTruthy();
});

test('should match for "меню"', () => {
  const text = 'меню';
  expect(new StartCommandMatch(text).isTrue()).toBeTruthy();
});

test('should not match', () => {
  const texts = [
    '/start odsajid',
    'меню 234',
  ];
  texts.forEach(text => {
    expect(new StartCommandMatch(text).isTrue()).not.toBeTruthy();
  });
});