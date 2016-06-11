/* global YT */
import uuid from 'uuid';

const memo = new Map();

const LOADED_PROMISE_PROP = Symbol();

class YTIframeVideoPlayer {
  constructor(state) {
    this.state = state || {
      iframeId: `yt-iframe-video-player-${ uuid.v4() }`,
    };
    if (!this._initialized) {
      this.constructor.loadedPromise = this.constructor.loadIframeApi();
    }
  }

  static get loadedPromise() { return this[LOADED_PROMISE_PROP]; }
  static set loadedPromise(value) { this[LOADED_PROMISE_PROP] = value; }

  static loadIframeApi() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    const p = new Promise(done => {
      tag.addEventListener('load', () => {
        this._initialized = true;
        done();
      });
    });
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    return p;
  }

  static get VIDEO_RATIO() { return 9 / 16; }

  handleIframeLoaded() {
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

}

export default YTIframeVideoPlayer;
