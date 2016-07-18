import { connect } from 'react-redux';
import Clock from './ClockPresentational.jsx';

const mapStateToProps = (state, props) => {
  return {};
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    state: { ...props.state, dispatch }
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(Clock);
