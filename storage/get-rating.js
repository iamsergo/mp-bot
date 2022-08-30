class GetRating {
  constructor(db) {
    this._db = db;
  }

  async execute() {
    const sql = 'SELECT * FROM rating_table_to_show';
    const { rows } = await this._db.query(sql);
    return rows;
  }
}

module.exports = GetRating;
