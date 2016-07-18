import { connect } from 'react-redux';
import App from './AppPresentational.jsx';

const mapStateToProps = (state, props) => {
  return {
    state
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    dispatch
  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
