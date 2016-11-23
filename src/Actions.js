import { createAction } from 'redux-actions';
import Models from './Models.js';

module.exports = {
  adjustSize: createAction('ADJUST_SIZE', () => ({ width: Models.App.width, height: Models.App.height, ratio: Models.App.ratio, windowRatio: Models.App.windowRatio })),
  updateClock: createAction('UPDATE_CLOCK'),
  waitBuffer: createAction('WAIT_BUFFER'),
  playNext: createAction('PLAY_NEXT'),
};
