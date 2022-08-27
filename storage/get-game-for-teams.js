class GetGameForTeams {
  constructor(db, data) {
    this._db = db;
    this._home = data.teams[0];
    this._away = data.teams[1];
  }

  async execute() {
    const sql = [
      'SELECT *',
      'FROM games',
      'WHERE home_id = (SELECT DISTINCT team_id FROM pseudonames WHERE lower(value) LIKE $1)',
      'AND away_id = (SELECT DISTINCT team_id FROM pseudonames WHERE lower(value) LIKE $2)',
      'AND time < extract(epoch from now()) * 1000',
    ].join(' ');
    const values = [this._home, this._away];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = GetGameForTeams;
