class GetMyPredictions {
  constructor(db, data) {
    this._db = db;
    this._userId = data.userId;
  }

  async execute() {
    const sql = [
      'SELECT',
        'predictions.value as prediction,',
        'predictions.points,',
        'array_agg(teams.name) as teams,',
        'games.score as result',
      'FROM predictions',
      'JOIN games ON user_id = $1 AND games.id = predictions.game_id',
      'JOIN teams ON games.home_id=teams.id OR games.away_id=teams.id',
      'GROUP BY predictions.id, games.id',
    ].join(' ');
    const values = [this._userId];
    const { rows } = await this._db.query(sql, values);
    return rows;
  }
}

module.exports = GetMyPredictions;
