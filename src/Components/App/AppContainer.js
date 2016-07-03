import { connect } from 'react-redux';
import App from './AppPresentational.jsx';

const mapStateToProps = (state) => {
  return { state: state };
};

const mapDispatchToProps = (dispatch) => {
  return {

  };
};

module.exports = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
