class App {
  constructor(state) {
    this.state = state || this.constructor.getState();
  }

  static get appRatio() { return innerHeight / innerWidth; }
  static get appWidth() { return innerWidth; }
  static get appHeight() { return innerHeight; }

  static getState() {
    return {
      width: this.appWidth,
      height: this.appHeight,
      ratio: this.appRatio
    };
  }
}

export default App;
