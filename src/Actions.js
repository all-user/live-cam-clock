import { createAction } from 'redux-actions';
import Models from './Models.js';

export const adjustSize = createAction('ADJUST_SIZE', () => ({ width: Models.App.width, height: Models.App.height, ratio: Models.App.ratio, windowRatio: Models.App.windowRatio }));
export const updateClock = createAction('UPDATE_CLOCK');
export const waitBuffer = createAction('WAIT_BUFFER');
export const playNext = createAction('PLAY_NEXT');
