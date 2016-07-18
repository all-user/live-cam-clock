import moment from 'moment';
import Models from '../../Models.js';
import BaseClasses from '../../BaseClasses';
import { adjustSize, updateClock } from '../../Actions.js';
import { handleActions } from 'redux-actions';

class Clock extends BaseClasses.Model {
  static get initialState() {
    const mo = moment(Date.now());
    return {
      hour: this.getHour(mo),
      min: this.getMin(mo),
      sec: this.getSec(mo),
      lineColor: 'transparent',
      paddingColor: 'white',
      lineWeight: 3,
      width: 0,
      height: 0
    };
  }

  static getHour(mo) { return mo.format('HH'); }
  static getMin(mo) { return mo.format('mm'); }
  static getSec(mo) { return mo.format('ss'); }

  static get horizontalGrid() { return 13; }
  static get verticalGrid() { return 8; }
  static get ratio() { return this.verticalGrid / this.horizontalGrid; }

  get gridSize() { return this.state.width / this.constructor.horizontalGrid; }

  // reducers
  static get reducer() {
    return handleActions({
      [adjustSize]: (state, action) => {
        return this.adjustSize(state, action);
      },
      [updateClock]: (state, action) => {
        const mo = moment(action.payload.timestamp);
        return {
          ...state,
          hour: this.getHour(mo),
          min: this.getMin(mo),
          sec: this.getSec(mo)
        };
      }
    });
  }

  static adjustSize(state, action) {
    return {
      ...state,
      width: action.payload.width - 2,
      height: action.payload.height - 2
    };
  }
}

module.exports = Clock;
