import YoutubeIframeVideoPlayer from './YoutubeIframeVideoPlayerPresentational.jsx';
import { connect } from 'react-redux';
import Models from '../../Models.js';

const mapStateToProps = (state, props) => {
  return state.liveCamClock.videoPlayers[props.idx];
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(YoutubeIframeVideoPlayer);
