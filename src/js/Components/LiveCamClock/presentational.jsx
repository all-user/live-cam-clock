import React, { Component } from 'react';
import Components from '../../Components.js';
import Models from '../../Models.js';

class LiveCamClock extends Component {
  render() {
    const model = new Models.LiveCamClock(this.props.state);
    const styles = {
      appWrap: {
        width: `${ model.width }px`,
        height: `${ model.height }px`
      },
      videoPlayersWrap: {
        backgroundColor: model.paddingColor
      }
    };

    return (
      <div style={ styles.appWrap } ref={ el => this._root = el }>
        <Components.Clock state={ model.clockState }/>
        { this.videoPlayers.map(s => <Components.YTIframeVideoPlayer state={ s }/>) }
      </div>
    );
  }
}

export default LiveCamClock;
