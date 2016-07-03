import { connect } from 'react-redux';
import Clock from './ClockPresentational.jsx';

const mapStateToProps = (state) => {
  return state;
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
