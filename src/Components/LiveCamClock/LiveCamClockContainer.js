import { connect } from 'react-redux';
import LiveCamClock from './LiveCamClockPresentational.jsx';
import Models from '../../Models.js';

const mapStateToProps = (state) => {
  return { state: state.liveCamClock };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveCamClock);
