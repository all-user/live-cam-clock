import Assets from '../Assets.js';
import Model from '../Model.js';
import Models from '../Models.js';
import { adjustSize, updateClock, waitBuffer, playNext } from '../Actions.js';
import { handleActions } from 'redux-actions';

class LiveCamClock extends Model {
  static get initialState() {
    return {
      colors: [...Assets.Colors],
      videos: [...Assets.Videos],
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
      },
      [updateClock]: (state, action) => {
        return { ...state, clockState: Models.Clock.reducer(state.clockState, action) };
      }
    }, this.initialState);
  }

  static adjustSize(state, action) {
    const width = action.payload.windowRatio > action.payload.ratio ? action.payload.width : action.payload.height / action.payload.ratio;
    const height = width * action.payload.ratio;
    return {
      ...state,
      width,
      height,
      clockState: Models.Clock.reducer(state.clockState, { ...action, payload: { height, width } }),
      videoPlayers: state.videoPlayers.map(s => {
        return Models.YoutubeIframeVideoPlayer.reducer(s, { ...action, payload: { height, width } });
      })
    };
  }
}

module.exports = LiveCamClock;
