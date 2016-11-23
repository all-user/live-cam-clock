import React from 'react';
import Component from '../Component.js';
import Components from '../Components.js';
import Models from '../Models.js';
import { adjustSize, waitBuffer } from '../Actions.js';

class LiveCamClock extends Component {
  onHandlePlayerReady(ev) {
    let video = ev.target;
    video.mute();
    video.setPlaybackRate(1);
    this.props.dispatch(adjustSize());
  }

  render() {
    const styles = {
      root: {
        width: `${ this.model.state.width }px`,
        height: `${ this.model.state.height }px`
      }
    };

    const videoPlayers = this.model.state.videoPlayers.map((s, i) => {
      return <Components.YoutubeIframeVideoPlayer
        state={{
          ...s,
          videoId: this.model.state.videos[this.model.state.videoIndexList[i]][0]
        }}
        onHandlePlayerReady={ this.onHandlePlayerReady }
        key={ s.iframeId }/>;
    });

    return <div
      style={ styles.root }>
      <Components.Clock
        dispatch={ this.props.dispatch }
        state={ this.model.clockState }/>
      { videoPlayers }
    </div>;
  }
}

module.exports = LiveCamClock;
