class MyPredictionsText {
  constructor(predictions) {
    this._predictions = predictions;
  }

  asString() {
    const predictionsText = this._predictions.length === 0
      ? 'У вас пока нет прогнозов.'
      : this._predictions.map(p => {
          const game = p.teams.join('-');
          const result = p.result ? p.result.join(':') : '?:?';
          const prediction = 'Ваш прогноз:  ' + p.prediction.join(':');
          let pointsPostfix;
          if(p.points === null) pointsPostfix = '';
          else if(p.points === 5) pointsPostfix = '🟢';
          else if(p.points === 3) pointsPostfix = '🟡';
          else if(p.points === 2) pointsPostfix = '🟠';
          else if(p.points === 0) pointsPostfix = '🔴';
          const pointsValue = p.points !== null ? p.points : '?';
          const points = `Очки: ${pointsValue} ${pointsPostfix}`;
        return [
          game + ' ' + result,
          prediction,
          points,
        ].join('\n');
      }).join('\n\n');

    const text = [
      '🎯 Ваши прогнозы:',
      predictionsText,
    ].join('\n\n')
    return text;
  }
}

module.exports = MyPredictionsText;
