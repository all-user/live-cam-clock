/* global YT */
import React from 'react';
import Models from '../../Models.js';
import BaseClasses from '../../BaseClasses.js';
import scopedStyles from './YoutubeIframeVideoPlayer.styl';

const IFRAME_REF_PROP = Symbol();
const ROOT_REF_PROP = Symbol();

class YoutubeIframeVideoPlayer extends BaseClasses.Component {
  componentDidMount() {
    this[IFRAME_REF_PROP] = document.createElement('iframe');
    this[IFRAME_REF_PROP].setAttribute('id', this.model.state.iframeId);
    this[IFRAME_REF_PROP].setAttribute('src', this.model.videoSrc);
    this[IFRAME_REF_PROP].addEventListener('load', this.model.handleIframeLoaded);
    this[ROOT_REF_PROP].appendChild(this[IFRAME_REF_PROP]);
  }

  componentDidUpdate() {
    this[IFRAME_REF_PROP].width = this.model.state.width;
    this[IFRAME_REF_PROP].height = this.model.state.height;
  }

  render() {
    const styles = {
      root: {
        width: `${ this.model.state.width }px`,
        height: `${ this.model.state.height }px`
      }
    };

    return <div className={ scopedStyles.wrapper } style={ styles.root } key={ this.props.id } ref={ el => this[ROOT_REF_PROP] = el }></div>;
  }
}

export default YoutubeIframeVideoPlayer;
