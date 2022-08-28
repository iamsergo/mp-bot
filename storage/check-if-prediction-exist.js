class CheckIfPredictionExist {
  constructor(db, data) {
    this._db = db;
    this._userId = data.userId;
    this._gameId = data.gameId;
  }

  async execute() {
    const sql = [
      'SELECT *',
      'FROM predictions',
      'WHERE user_id=$1 AND game_id=$2 AND applying=true',
    ].join(' ');
    const values = [this._userId, this._gameId];
    const { rows } = await this._db.query(sql, values);
    return rows[0] !== undefined;
  }
}

module.exports = CheckIfPredictionExist;
