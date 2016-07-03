import moment from 'moment';
import Models from '../../Models.js';
import BaseClasses from '../../BaseClasses';

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

  static get ratio() { return 8 / 13; }
  static get gridSize() { return this.clockWidth / 13; }
  static get clockWidth() { return Models.App.ratio > this.ratio ? Models.App.width : Models.App.height / this.ratio; }
  static get clockHeight() { return this.clockWidth * this.ratio; }
}

module.exports = Clock;
