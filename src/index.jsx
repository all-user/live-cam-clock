import React from 'react';
import Components from './Components';
import Models from './Models.js';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux';
import { createStore } from 'redux';
import '@all-user/ok-patterns-lines/dist/bundle.css';
import Styles from './index.styl';

const store = createStore(Models.App.reducer);
const App = connect((state, props) => ({ ...props, state }))(Components.App);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider
      store={ store }>
      <App/>
    </Provider>,
    document.querySelector('#app')
  );
});
