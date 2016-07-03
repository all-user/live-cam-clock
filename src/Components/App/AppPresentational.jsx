import React from 'react';
import Views from '../../Views.js';
import BaseClasses from '../../BaseClasses.js';

class App extends BaseClasses.Component {
  render() {
    return (
      <Views.LiveCamClock state={ this.props.state }/>
    );
  }
}

export default App;
