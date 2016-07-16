/* global YT */
import YoutubeIframeVideoPlayer from './YoutubeIframeVideoPlayerPresentational.jsx';
import { connect } from 'react-redux';
import Models from '../../Models.js';
import { adjustSize, waitBuffer } from '../../Actions.js';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    state: {
      ...props.state,
      handlePlayerReady(ev) {
        let video = ev.target;
        video.mute();
        video.setPlaybackRate(1);
        dispatch(adjustSize({}));
        // dispatch(waitBuffer({
        //   model: this,
        //   videoId: props.videoId
        // }));
      }
    }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(YoutubeIframeVideoPlayer);
