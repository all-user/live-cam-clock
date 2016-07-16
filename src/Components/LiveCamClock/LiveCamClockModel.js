import DataSets from '../../DataSets.js';
import Models from '../../Models.js';
import { adjustSize, waitBuffer, playNext } from '../../Actions.js';
import { handleActions } from 'redux-actions';
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
      videoIndexList: [0],
      width: 0,
      height: 0,
      bufferingDuration: 10 * 1000
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
  static get reducer() {
    return handleActions({
      [adjustSize]: (state, action) => {
        return this.adjustSize(state, action);
      }
    });
  }

  static adjustSize(state, action) {
    return {
      ...state,
      ...action.payload,
      videoPlayers: state.videoPlayers.map(s => {
        return Models.YoutubeIframeVideoPlayer.reducer(s, action);
      })
    };
  }
}

module.exports = LiveCamClock;
