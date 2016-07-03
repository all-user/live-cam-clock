import Models from '../../Models';
import BaseClasses from '../../BaseClasses';

class App extends BaseClasses.Model {
  static get ratio() { return innerHeight / innerWidth; }
  static get width() { return innerWidth; }
  static get height() { return innerHeight; }

  static get initialState() {
    return {
      width: this.appWidth,
      height: this.appHeight,
      ratio: this.appRatio,
      liveCamClock: Models.LiveCamClock.initialState
    };
  }

  static reducer(state, action) {
    if (state == null) {
      return this.initialState;
    }
    return state;
  }
}

App.reducer = App.reducer.bind(App);

module.exports = App;
