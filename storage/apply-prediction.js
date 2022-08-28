class ApplyPrediction {
  constructor(db, data) {
    this._db = db;
    this._id = data.predictionId;
  }

  async execute() {
    const sql = [
      'WITH updated AS (',
        'UPDATE predictions',
        'SET applying = true, time = extract(epoch from now()) * 1000',
        'WHERE predictions.id IN (',
          'SELECT predictions.id',
          'FROM predictions',
          'JOIN games',
          'ON predictions.id=$1',
          'AND predictions.game_id=games.id',
          'AND extract(epoch from now()) * 1000 < games.time',
        ')',
        'RETURNING *',
      ')',
      'SELECT updated.id, updated.value, array_agg(teams.name) as teams',
      'FROM updated',
      'JOIN games ON updated.game_id = games.id',
      'JOIN teams ON home_id=teams.id OR away_id=teams.id',
      'GROUP BY updated.id, updated.value ',     
    ].join(' ');
    const values = [this._id];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = ApplyPrediction;
