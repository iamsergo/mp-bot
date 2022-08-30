class GetUserPredictions {
  constructor(db, data) {
    this._db = db;
    this._username = data.username;
  }

  async execute() {
    const sql = [
      'SELECT',
        'predictions.value as prediction,',
        'predictions.points,',
        'array_agg(teams.name) as teams,',
        'games.score as result',
      'FROM (',
        'SELECT *',
        'FROM users',
        'WHERE lower(users.username) LIKE $1',
      ') as users',
      'JOIN predictions ON predictions.user_id = users.tgId',
      'JOIN games ON games.id = predictions.game_id',
      'JOIN teams ON games.home_id=teams.id OR games.away_id=teams.id',
      'GROUP BY predictions.id, games.id',    
    ].join(' ');
    const values = [this._username];
    const { rows } = await this._db.query(sql, values);
    return rows;
  }
}

module.exports = GetUserPredictions;
