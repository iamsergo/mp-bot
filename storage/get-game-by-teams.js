class GetGameByTeams {
  constructor(db, data) {
    this._db = db;
    this._home = data.teams[0];
    this._away = data.teams[1];
  }

  async execute() {
    const sql = [
      'SELECT',
        'game.id,',
        'array_agg(teams.name) as teams,',
        'game.score as result',
      'FROM (',
        'SELECT *',
        'FROM games',
        'WHERE home_id = (SELECT DISTINCT team_id FROM pseudonames WHERE lower(value) LIKE $1)',
        'AND away_id = (SELECT DISTINCT team_id FROM pseudonames WHERE lower(value) LIKE $2)',
      ') as game',
      'JOIN teams ON teams.id IN (game.home_id, game.away_id)',
      'GROUP BY game.id, game.score',
    ].join(' ');
    const values = [this._home, this._away];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = GetGameByTeams;
