class CancelPrediction {
  constructor(db, data) {
    this._db = db;
    this._id = data.predictionId;
  }

  async execute() {
    const sql = [
      'DELETE FROM predictions',
      'WHERE id = $1',
    ].join(' ');
    const values = [this._id];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = CancelPrediction;
