/* global YT */
import { Component } from 'react';

let _wrapId = 0;
let _iframeId = 0;

class YTIframeVideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.wrapId = props.wrapId || `yt-iframe-video-player-wrap-${ _wrapId++ }`;
    this.iframeId = props.iframeId || `yt-iframe-video-player-${ _iframeId++ }`;
  }
  static get VIDEO_RATIO() { return 9 / 16; }
  static init() {
    if (this._initialized) { return false; }
    let tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    let firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    return (this._initialized = true);
  }

  handleYouTubeIframeAPIReady() {
    this.player = new YT.Player(this.iframeId, {
      events: {
        onReady: this.props.handlePlayerReady,
        onStateChange: this.props.handlePlayerStateChange,
        onError: err => {
          console.log('onerror');
          console.log(err);
          console.log(this.props.videoId);
          this.props.handleError();
        }
      }
    });
  }

  componentDidMount() {
    this._player = document.createElement('iframe');
    this._player.setAttribute('id', this._iframeId);
    this._player.addEventListener('load', this.handleYouTubeIframeAPIReady);
    this._el.appenChild(this._player);
  }

  set width(newValue) { this._player.setAttribute('width', newValue); }
  set height(newValue) { this._player.setAttribute('height', newValue); }
  set src(newValue) { this._player.setAttribute('src', newValue); }

  render() {
    return <div id={ this.wrapId } ref={ el => this._el = el }/>;
  }


}

export default YTIframeVideoPlayer;
