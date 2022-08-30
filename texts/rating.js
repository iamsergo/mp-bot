class RatingText {
  constructor(rating, ratingForUser) {
    this._rating = rating;
    this._ratingForUser = ratingForUser;
  }

  asString() {
    const ratingText = this._rating.length === 0
      ? 'Рейтинг пока пустой.'
      : this._rating.map(u => {
        let positionPrefix;
        if(+u.position === 1) positionPrefix = '🥇 ';
        else if(+u.position === 2) positionPrefix = '🥈 ';
        else if(+u.position === 3) positionPrefix = '🥉 ';
        else positionPrefix = `#${u.position} `;

        return `${positionPrefix} @${u.username} ${u.points}оч.`
      }).join('\n');
    const ratingForUserText = this._ratingForUser
      ? [
        `Вы на ${this._ratingForUser.position} месте.`,
        `У вас ${this._ratingForUser.points}оч.`,
      ].join('\n')
      : 'Вас пока нет в рейтинге.';
    const text = [
      '📊 Рейтинг прогнозистов',
      ratingText,
      ratingForUserText,
    ].join('\n\n');
    return text;
  }
}

module.exports = RatingText;
