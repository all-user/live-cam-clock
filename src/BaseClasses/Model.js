class Model {
  constructor(state) {
    this.state = state || this.constructor.initialState;
  }
}

module.exports = Model;
