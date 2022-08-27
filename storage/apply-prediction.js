class ApplyPrediction {
  constructor(db, data) {
    this._db = db;
    this._id = data.predictionId;
  }

  async execute() {
    const sql = [
      'UPDATE predictions',
      'SET applying = true, time = extract(epoch from now()) * 1000',
      'WHERE predictions.id IN (',
        'SELECT predictions.id',
        'FROM predictions',
        'JOIN games',
        'ON predictions.id = $1',
        'AND predictions.game_id = games.id',
        'AND extract(epoch from now()) * 1000 < games.time',
      ')',
      'RETURNING *',
    ].join(' ');
    const values = [this._id];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = ApplyPrediction;
