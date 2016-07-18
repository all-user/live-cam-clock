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
    handlePlayerReady(ev) {
      let video = ev.target;
      video.mute();
      video.setPlaybackRate(1);
      dispatch(adjustSize());
    }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(YoutubeIframeVideoPlayer);
