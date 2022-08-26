const { User } = require("../db-entites");

class UpdateUser {
  constructor(db, data) {
    this._db = db;
    this._user = data.user;
  }

  async _getUser() {
    const sql = `SELECT * FROM users WHERE tgid=$1`;
    const values = [this._user.id];
    const { rows } = await this._db.query(sql, values);
    return rows[0];
  }

  async _createUser() {
    const sql = `INSERT INTO users (tgid, name, username) VALUES ($1, $2, $3)`;
    const user = new User(this._user).asObject();
    const values = [user.tgId, user.name, user.username];
    return this._db.query(sql, values);
  }

  async _updateUser(userId) {
    const sql = `UPDATE users SET name=$1, username=$2 WHERE id=$3`;
    const user = new User(this._user).asObject();
    const values = [user.name, user.username, userId];
    return this._db.query(sql, values);
  }

  async execute() {
    const user = await this._getUser();
    if(!user) return await this._createUser();
    await this._updateUser(user.id);
  }
}

module.exports = UpdateUser;
