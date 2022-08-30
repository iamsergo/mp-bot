class GetRatingForUser {
  constructor(db, data) {
    this._db = db;
    this._userId = data.userId;
  }

  async execute() {
    const sql = 'SELECT * FROM rating_table_to_show WHERE user_id=$1';
    const values = [this._userId];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }
}

module.exports = GetRatingForUser;
