/* global YT */
import React, { Component } from 'react';

class YTIframeVideoPlayer extends Component {
  constructor(props, ...args) {
    super(props, ...args);
    this._iframeId = `yt-iframe-video-player-${ props.id }`;
    if (!this._initialized) {
      this.constructor.loadIframeApi();
      this._initialized = true;
    }
  }

  static get VIDEO_RATIO() { return 9 / 16; }

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

  handleYouTubeIframeAPIReady() {
    this.player = new YT.Player(this._iframeId, {
      events: {
        onReady: (...args) => this.emmit('onReady', ...args),
        onStateChange: (...args) => this.emmit('onStateChange', ...args),
        onError: (...args) => this.emmit('onError', ...args)
      }
    });
  }

  componentDidMount() {
    this._iframe = document.createElement('iframe');
    this._iframe.setAttribute('id', this._iframeId);
    this._iframe.addEventListener('load', this.handleYouTubeIframeAPIReady);
    this._root.appenChild(this._iframe);
  }

  set width(value) {
    this._rootWidth = value;
    this._root.style.width = `${ this._rootWidth }px`;
  }
  get width() { return this._rootWidth; }
  set height(value) {
    this._rootHeight = value;
    this._root.style.height = `${ this._rootHeight }px`;
  }
  get height() { return this._rootHeight; }
  set src(value) { this._iframe.setAttribute('src', value); }

  adjustSize() {
    this._iframe.setAttribute('width', (this._rootWidth) / this.constructor.VIDEO_RATIO);
    this._iframe.setAttribute('height', this._rootHeight);
    this._iframe.setAttribute('src', getVideoSrc(...VIDEO_IDS[videoIndex]));
    this._iframe.addEventListener('load', window.onYouTubeIframeAPIReady);
  }

  render() {
    return <div key={ this.props.id } ref={ el => this._root = el }></div>;
  }
}

Object.assign(YTIframeVideoPlayer.prototype, EventEmitter.prototype, { constructor: YTIframeVideoPlayer });

export default YTIframeVideoPlayer;
