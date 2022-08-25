class MessageHandler {
  constructor(options) {
    this._next = null;
    this._matcher = options.matcher;
    this._handler = options.handler;
  }

  setNext(next) {
    this._next = next;
    return next;
  }

  async handle(message) {
    if(this._matcher.isTrue()) {
      await this._handler.execute();
      return;
    }

    if(this._next) {
      this._next.handle(message);
    }
  }
}

module.exports = MessageHandler;
