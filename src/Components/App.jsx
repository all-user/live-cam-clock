import React from 'react';
import Component from '../Component.js';
import Components from '../Components.js';
import { adjustSize } from '../Actions.js';
import debounce from 'lodash/debounce';

class App extends Component {
  constructor(...args) {
    super(...args);
    this.onHandleResize = debounce(this.onHandleResize.bind(this), 100);
  }

  onHandleResize() {
    this.props.dispatch(adjustSize());
  }

  componentDidMount() {
    window.addEventListener('resize', this.onHandleResize);
    this.onHandleResize();
  }

  render() {
    return <Components.LiveCamClock
      dispatch={ this.props.dispatch }
      state={ this.props.state.liveCamClock }/>;
  }
}

module.exports = App;
