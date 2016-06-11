import moment from 'moment';

class Clock {
  constructor(state) {
    this.state = state || this.constructor.getState();
  }

  static getHour(mo) { return mo.format('HH'); }
  static getMin(mo) { return mo.format('mm'); }
  static getSec(mo) { return mo.format('ss'); }

  static getState(mo) {
    mo = mo || moment(Date.now());
    return {
      hour: this.getHour(mo),
      min: this.getMin(mo),
      sec: this.getSec(mo)
    };
  }
}

export default Clock;
