const { Pool } = require('pg');
const UpdateUser = require('./update-user');
const GetGameForTeams = require('./get-game-for-teams');
const CreatePrediction = require('./create-prediction');
const ApplyPrediction = require('./apply-prediction');
const CancelPrediction = require('./cancel-prediction');
const CheckIfPredictionExist = require('./check-if-prediction-exist');

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

  async getGameForTeams(teams) {
    return new GetGameForTeams(this._db, { teams }).execute();
  }

  async checkIfPredictionExist(data) {
    return new CheckIfPredictionExist(this._db, data).execute();
  }

  async createPrediction(prediction) {
    return new CreatePrediction(this._db, prediction).execute();
  }

  async applyPrediction(predictionId) {
    return new ApplyPrediction(this._db, { predictionId }).execute();
  }

  async cancelPrediction(predictionId) {
    return new CancelPrediction(this._db, { predictionId }).execute();
  }
}

module.exports = new PgStorage();
