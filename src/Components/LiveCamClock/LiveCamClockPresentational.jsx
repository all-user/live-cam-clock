import React from 'react';
import Views from '../../Views.js';
import Models from '../../Models.js';
import BaseClasses from '../../BaseClasses';

class LiveCamClock extends BaseClasses.Component {
  render() {
    debugger;
    const styles = {
      root: {
        width: `${ this.model.state.width }px`,
        height: `${ this.model.state.height }px`
      }
    };

    return (
      <div style={ styles.root }>
        <Views.Clock state={ this.model.clockState }/>
        { this.model.state.videoPlayers.map((s, i) => <Views.YoutubeIframeVideoPlayer state={ { ...s, videoId: this.model.state.videos[this.model.state.videoIndexList[i]][0] } } key={ s.iframeId }/>) }
      </div>
    );
  }
}

export default LiveCamClock;
