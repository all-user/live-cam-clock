/* global YT */
import React from 'react';
import Models from '../../Models.js';
import BaseClasses from '../../BaseClasses.js';

const IFRAME_REF_PROP = Symbol();
const ROOT_REF_PROP = Symbol();

class YoutubeIframeVideoPlayer extends BaseClasses.Component {
  componentWillReceiveProps(props) {
    this.model = new Models.LiveCamClock(props.state);
  }

  componentDidMount() {
    this[IFRAME_REF_PROP] = document.createElement('iframe');
    this[IFRAME_REF_PROP].setAttribute('id', this.model.state.iframeId);
    this[IFRAME_REF_PROP].addEventListener('load', this.model.handleIframeLoaded);
    this[ROOT_REF_PROP].appendChild(this[IFRAME_REF_PROP]);
  }

  componentDidUpdate() {
    this[IFRAME_REF_PROP].width = this.model.height / Models.YoutubeIframeVideoPlayer.ratio;
    this[IFRAME_REF_PROP].height = this.model.height;
  }

  render() {
    const styles = {
      root: {
        width: `${ this.model.width }px`,
        height: `${ this.model.height }px`
      }
    };

    return <div style={ styles.root } key={ this.props.id } ref={ el => this[ROOT_REF_PROP] = el }></div>;
  }
}

export default YoutubeIframeVideoPlayer;
