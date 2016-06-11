import LiveCamClock from './presentational.jsx';
import { connect } from 'react-redux';

const mapStateToProps = (state, props) => {
  return { ...state.liveCamClock };
};

const mapDispatchToProps = (dispatch, props) => {
  return {

  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(LiveCamClock);
