const { Pool } = require('pg');
const UpdateUser = require('./update-user');
const GetGameForTeams = require('./get-game-for-teams');

class PgStorage {
  constructor() {
    this._db = new Pool({
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      host: process.env.DB_HOST,
      port: process.env.DB_PORT,
      database: process.env.DB_NAME,
     });
  }

  async updateUser(user) {
    return new UpdateUser(this._db, { user }).execute();
  }

  async getGameByTeams(teams) {
    return new GetGameForTeams(this._db, { teams }).execute();
  }
}

module.exports = new PgStorage();
