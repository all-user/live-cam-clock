class Model {
  constructor(props) {
    this.props = { ...this.constructor.defaultProps, ...props };
    this.state = { ...this.constructor.initialState, ...props.state };
  }

  static get initialState() {
    return {};
  }

  static get defaultProps() {
    return {};
  }
}

module.exports = Model;
