const { Prediction } = require("../db-entites");

class CreatePrediction {
  constructor(db, data) {
    this._db = db;
    this._prediction = data;
  }

  async execute() {
    const columns = [
      'user_id',
      'game_id',
      'value',
      'total',
      'result',
      'diff',
    ];
    const prediction = new Prediction(this._prediction).asObject();
    const sql = [
      'INSERT INTO predictions',
      `(${columns.join(', ')})`,
      `VALUES (${columns.map((_,i) => `$${i+1}`).join(', ')})`,
      'RETURNING *'
    ].join(' ');
    const values = columns.map(column => prediction[column]);
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = CreatePrediction;
