class PredictionMenuText {
  asString() {
    return [
      'Чтобы сделать прогноз:',
      '1️⃣ напишите команду для бота(/prediction) или на русском языке "прогноз на"',
      '2️⃣ далее укажите названия команд через тире(приемлимые названия для команд доступны по команде /teams)',
      '3️⃣ запишите свой прогноз-счет через двоеточие',
      'Пример: "Прогноз на Амкал-на спорте 4:1"',
      'Или: "/prediction бейбики-2д 0:3"',
    ].join('\n');
  }
}
module.exports = PredictionMenuText;
