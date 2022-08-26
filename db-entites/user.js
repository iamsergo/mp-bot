class User {
  constructor(tgUser) {
    this._raw = tgUser;
  }

  asObject() {
    return {
      tgId: this._raw.id,
      name: this._raw.first_name,
      username: this._raw.username,
    };
  }
}

module.exports = User;
