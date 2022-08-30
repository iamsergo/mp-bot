class GetTeams {
  constructor(db) {
    this._db = db;
  }

  async execute() {
    const sql = [
      'SELECT teams.name, array_agg(pseudonames.value) as pseudonames',
      'FROM teams',
      'JOIN pseudonames ON teams.id = pseudonames.team_id',
      'GROUP BY teams.id',
    ].join(' ');
    const { rows } = await this._db.query(sql);
    return rows;
  }
}

module.exports = GetTeams;
