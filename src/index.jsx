import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import '@all-user/ok-patterns-lines/dist/bundle.css';
import Views from './Views.js';
import Models from './Models.js';
import styles from './index.styl';

const store = createStore(Models.App.reducer);

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={ store }>
      <Views.App/>
    </Provider>,
    document.querySelector('#app')
  );
});
