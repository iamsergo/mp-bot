class GetGames {
  constructor(db) {
    this._db = db;
  }

  async execute() {
    const sql = [
      'SELECT',
        'games.id,',
        'array_agg(teams.name) as teams,',
        'games.time,',
        'games.score,',
        'games.group,',
        'games.tour',
      'FROM games',
      'JOIN teams ON teams.id IN (games.home_id, games.away_id)',
      'GROUP BY games.id',
      'ORDER BY games.time ASC',
    ].join(' ');
    const { rows } = await this._db.query(sql);
    return rows;
  }
}

module.exports = GetGames;
