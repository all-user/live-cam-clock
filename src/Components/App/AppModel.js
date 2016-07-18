import Models from '../../Models';
import BaseClasses from '../../BaseClasses';
import { adjustSize, updateClock } from '../../Actions.js';
import { handleActions } from 'redux-actions';
import debounce from 'lodash/debounce';

class App extends BaseClasses.Model {
  constructor(...args) {
    super(...args);
    this.handleResize = debounce(this.handleResize.bind(this), 50);
  }

  static get windowRatio() { return innerHeight / innerWidth; }
  static get ratio() { return Models.Clock.ratio; }
  static get width() { return innerWidth; }
  static get height() { return innerHeight; }

  static get initialState() {
    return {
      windowRatio: this.windowRatio,
      ratio: this.ratio,
      width: this.width,
      height: this.height,
      liveCamClock: Models.LiveCamClock.initialState
    };
  }

  static get reducer() {
    return handleActions({
      [adjustSize]: (state, action) => {
        return {
          ...state,
          ...action.payload,
          liveCamClock: Models.LiveCamClock.reducer(state.liveCamClock, action)
        };
      },
      [updateClock]: (state, action) => {
        return {
          ...state,
          liveCamClock: Models.LiveCamClock.reducer(state.liveCamClock, action)
        };
      }
    }, this.initialState);
  }

  handleResize() {
    this.props.dispatch(adjustSize());
  }
}

module.exports = App;
