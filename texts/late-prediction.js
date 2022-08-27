class LatePredictionText {
  asString() {
    const text = [
      `Матч уже начался или завершился.`,
      '',
      'Правила прогнозов можно посмотреть командой /rules',
    ].join('\n');
    return text;
  }
}

module.exports = LatePredictionText;
