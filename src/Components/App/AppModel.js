import Models from '../../Models';
import BaseClasses from '../../BaseClasses';
import { adjustSize } from '../../Actions.js';
import { handleActions } from 'redux-actions';

class App extends BaseClasses.Model {
  static get ratio() { return innerHeight / innerWidth; }
  static get width() { return innerWidth; }
  static get height() { return innerHeight; }

  static get initialState() {
    return {
      width: this.width,
      height: this.height,
      ratio: this.ratio,
      liveCamClock: Models.LiveCamClock.initialState
    };
  }

  static get reducer() {
    return handleActions({
      [adjustSize]: (state, action) => {
        debugger;
        return {
          ...state,
          ...action.payload,
          liveCamClock: Models.LiveCamClock.reducer(state.liveCamClock, action)
        };
      }
    }, this.initialState);
  }
}

module.exports = App;
