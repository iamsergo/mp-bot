class GetPredictionsForGame {
  constructor(db, data) {
    this._db = db;
    this._gameId = data.gameId;
  }

  async execute() {
    const sql = [
      'SELECT',
        'users.username,',
        'predictions.value as prediction,',
        'predictions.points,',
        'games.score as result',
      'FROM predictions',
      'JOIN games ON predictions.game_id = $1 AND predictions.game_id = games.id',
      'JOIN users ON predictions.user_id = users.tgId',
      'GROUP BY predictions.id, games.id, users.id',
    ].join(' ');
    const values = [this._gameId];
    const { rows } = await this._db.query(sql, values);
    return rows;
  }
}

module.exports = GetPredictionsForGame;
