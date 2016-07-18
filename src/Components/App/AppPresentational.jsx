import React from 'react';
import Views from '../../Views.js';
import BaseClasses from '../../BaseClasses.js';

class App extends BaseClasses.Component {
  componentDidMount() {
    window.addEventListener('resize', this.model.handleResize);
  }

  render() {
    return (
      <Views.LiveCamClock state={ this.props.state.liveCamClock }/>
    );
  }
}

export default App;
