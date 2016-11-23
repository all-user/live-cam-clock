/* global YT */
import uuid from 'uuid';
import Assets from '../Assets.js';
import Model from '../Model.js';
import { adjustSize } from '../Actions.js';
import { handleActions } from 'redux-actions';

class YoutubeIframeVideoPlayer extends Model {
  constructor(props) {
    super(props);
    this.handleIframeLoaded = this.handleIframeLoaded.bind(this);
    if (!this.constructor.youtubeIframeAPIReady) {
      this.constructor.youtubeIframeAPIReady = this.constructor.loadIframeApi();
    }
  }

  static get initialState() {
    return {
      iframeId: `yt-iframe-video-player-${ uuid.v4() }`,
      width: 0,
      height: 0,
      videoId: Assets.Videos[0][0]
    };
  }

  static get defaultProps() {
    return {
      handlePlayerReady: () => { console.log('handlePlayerReady is not implements yet.'); },
      handlePlayerStateChange: () => { console.log('handlePlayerStateChange is not implements yet.'); },
      handlePlayerError: () => { console.log('handlePlayerError is not implements yet.'); }
    };
  }

  static get ratio() { return 9 / 16; }

  static loadIframeApi() {
    const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    const firstScriptTag = document.getElementsByTagName('script')[0];
    const p = new Promise(done => window.onYouTubeIframeAPIReady = done);
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    return p;
  }

  get videoId() { return this.state.videoId; }
  get videoSrc() {
    return `http://www.youtube.com/embed/${ this.videoId }?enablejsapi=1&autoplay=1&controls=0&showinfo=0&modestbranding=0`;
  }

  handleIframeLoaded() {
    this.constructor.youtubeIframeAPIReady.then(() => {
      this.player = this.getNewPlayer();
    });
  }

  getNewPlayer() {
    return new YT.Player(this.state.iframeId, {
      events: {
        onReady: this.props.handlePlayerReady,
        onStateChange: this.props.handlePlayerStateChange,
        onError: this.props.handleError
      }
    });
  }

  // reducers
  static get reducer() {
    return handleActions({
      [adjustSize]: (state, action) => {
        return this.adjustSize(state, action);
      }
    }, this.initialState);
  }

  static adjustSize(state, action) {
    return {
      ...state,
      width: (action.payload.height - 2) / this.ratio,
      height: action.payload.height
    };
  }
}

module.exports = YoutubeIframeVideoPlayer;
