class LatePredictionText {
  asString() {
    const text = [
      'Нельзя сделать прогноз на данный матч. Вы уже сделали прогноз, либо матч начался.',
      '',
      'Правила прогнозов можно посмотреть командой /rules',
    ].join('\n');
    return text;
  }
}

module.exports = LatePredictionText;
