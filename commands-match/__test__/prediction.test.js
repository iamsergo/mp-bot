const { PredictionCommandMatch } = require('../');

test('should match for "прогноз на "', () => {
  const text = 'прогноз на амкas das das dал-2д 4 asdas d:1';
  expect(new PredictionCommandMatch(text).isTrue()).toBeTruthy();
});

test('should match for "/prediction "', () => {
  const text = '/prediction а as das ddsfdмкал-2д 4=1';
  expect(new PredictionCommandMatch(text).isTrue()).toBeTruthy();
});

test('should not match', () => {
  const texts = [
    '/predicitonмкал-2д 4=1',
    'прогнозна амкал-2д 4 asdas d:1',
    'прогноз амкал-2д 4 asdas d:1',
    'прогнозамкал-2д 4 asdas d:1',
  ];
  texts.forEach(text => {
    expect(new PredictionCommandMatch(text).isTrue()).not.toBeTruthy();
  });
});