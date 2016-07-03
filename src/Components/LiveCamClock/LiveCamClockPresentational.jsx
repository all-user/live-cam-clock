import React from 'react';
import Views from '../../Views.js';
import Models from '../../Models.js';
import BaseClasses from '../../BaseClasses';

class LiveCamClock extends BaseClasses.Component {
  render() {
    const styles = {
      root: {
        width: `${ this.model.width }px`,
        height: `${ this.model.height }px`
      }
    };

    return (
      <div style={ styles.root }>
        <Views.Clock state={ this.model.clockState }/>
        { this.model.state.videoPlayers.map((s, i) => <Views.YoutubeIframeVideoPlayer state={ s } key={ s.iframeId } idx={ i }/>) }
      </div>
    );
  }
}

export default LiveCamClock;
