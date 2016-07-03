import DataSets from '../../DataSets.js';
import Models from '../../Models.js';
import { ADJUST_SIZE } from '../../ActionTypes.js';
import BaseClasses from '../../BaseClasses';

class LiveCamClock extends BaseClasses.Model {
  static get initialState() {
    return {
      colors: [...DataSets.Color],
      videos: [...DataSets.Video],
      videoPlayers: [Models.YoutubeIframeVideoPlayer.initialState],
      clockState: Models.Clock.initialState,
      lineColorIndex: 0,
      paddingColorIndex: 1,
      lineWeight: 3,
      videoIndex: 0,
      width: 0,
      height: 0
    };
  }

  get lineColor() {
    return this.state.colors[this.state.lineColorIndex];
  }

  get paddingColor() {
    return this.state.colors[this.state.paddingColorIndex];
  }

  get clockState() {
    return {
      ...this.state.clockState,
      width: this.state.width,
      height: this.state.height,
      lineColor: this.lineColor,
      paddingColor: this.paddingColor
    };
  }

  // reducers
  static reducer(state, action) {
    switch (action.type) {
    case ADJUST_SIZE:
      return this.adjustSize(state, action);
    default:
      return state;
    }
  }

  static adjustSize(state, action) {
    const adjusted = {
      width: action.appWidth,
      height: action.appHeight
    };
    return {
      ...state,
      ...adjusted,
      videoPlayers: state.videoPlayers.map(s => {
        return Models.YoutubeIframeVideoPlayer.reducer(s, {
          type: ADJUST_SIZE,
          ...adjusted
        });
      })
    };
  }
}

module.exports = LiveCamClock;
