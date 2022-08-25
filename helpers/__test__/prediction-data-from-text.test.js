const { PredictionDataFromText } = require('../');

test.each([
  '/prediction - амкал 2:1',
  '/prediction 2дротс 2:1',
  '/prediction -амкал 2 :1',
  '/prediction амкал 20: 01',
  '/prediction амкал-u 3:',
  '/prediction амкал -pp :2',
  '/prediction амкал',
  '/prediction амкал 2:1',
  '/prediction амкал 2-1',
  '/prediction 4:1',
  '/prediction амкал-ww 2-1',
  '/prediction qq-ee 2-11',
  '/prediction ',
])('should returns null', (text) => {
  expect(new PredictionDataFromText(text).value()).toBeNull();
});

test.each([
  '/prediction Амкал-2д 2:1',
  'прогноз на бей беги-амкал 2:1',
  '/prediction бей беги-броук бойз 2:1',
  '/prediction на спорте - амкал 2:1',
  '/prediction 2дротс -амкал 2:1',
  '/prediction 2дротс- ам кал 2:1',
  '/prediction 2дротс-амкал 20:01',
  '/prediction Амкал-2д 2 :1',
  'прогноз на бей беги беги лети-амкал 2: 1',
  '/prediction бей беги-броук бойз 2 : 1',
])('should returns null', (text) => {
  expect(new PredictionDataFromText(text).value()).not.toBeNull();
});