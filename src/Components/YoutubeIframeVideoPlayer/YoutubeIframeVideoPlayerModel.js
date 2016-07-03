/* global YT */
import uuid from 'uuid';
import DataSets from '../../DataSets.js';
import { ADJUST_SIZE } from '../../ActionTypes.js';
import BaseClasses from '../../BaseClasses';

const LOADED_PROMISE_PROP = Symbol();

class YoutubeIframeVideoPlayer extends BaseClasses.Model {
  constructor(state) {
    super(state);
    this.handleIframeLoaded = this.handleIframeLoaded.bind(this);
    if (!this.loadedPromise) {
      this.constructor.loadedPromise = this.constructor.loadIframeApi();
    }
  }

  static get initialState() {
    return {
      iframeId: `yt-iframe-video-player-${ uuid.v4() }`,
      width: 0,
      height: 0,
      videoId: DataSets.Video[0][0]
    };
  }

  static get ratio() { return 9 / 16; }
  static get iframeId() { return this.state.iframeId; }

  static get loadedPromise() { return this[LOADED_PROMISE_PROP]; }
  static set loadedPromise(value) { this[LOADED_PROMISE_PROP] = value; }

  static loadIframeApi() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    const p = new Promise(done => window.onYouTubeIframeAPIReady = done);
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    return p;
  }

  get width() { return this.state.width; }
  get height() { return this.state.height; }
  get videoId() { return this.state.videoId; }

  handleIframeLoaded() {
    debugger;
    this.player = this.getNewPlayer();
  }

  getNewPlayer() {
    return new YT.Player(this.state.iframeId, {
      events: {
        onReady: this.handlePlayerReady,
        onStateChange: this.handlePlayerStateChange,
        onError: this.handleError
      }
    });
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
    return {
      ...state,
      width: action.width,
      height: action.height
    };
  }
}

module.exports = YoutubeIframeVideoPlayer;
