import Assets from '../Assets.js';
import Models from '../Models.js';

class LiveCamClock {
  constructor(state) {
    this.state = state || {
      colors: [...Assets.Colors],
      videos: [...Assets.Videos],
      videoPlayers: [],
      lineColorIndex: 0,
      paddingColorIndex: 1,
      videoIndex: 0,
      lineWeight: 3,
      width: 0,
      height: 0
    };
  }

  static get ratio() { return 8 / 13; }
  static getGridSize(app) { return this.getClockWidth(app) / 13; }
  static getClockWidth(app) { return app.ratio > this.ratio ? app.width : app.height / this.ratio; }
  static getClockHeight(app) { return this.getClockWidth(app) * this.ratio; }

  get width() { return this.state.width; }
  get height() { return this.state.height; }
  get colors() { return this.state.colors; }
  set colors(value) { return this.state.colors = value; }
  get lineColor() { return this.state.colors[this.state.lineColorIndex]; }
  get paddingColor() { return this.state.colors[this.state.paddingColorIndex]; }
  get clockState() { return Models.Clock.getState(); }

  adjustSize(app) {
    this.state = {
      ...this.state,
      width: this.constructor.getClockWidth(app),
      height: this.constructor.getClockHeight(app)
    };
    this.videoPlayers.forEach(p => p.adjustSize(this.state));
  }
}

export default LiveCamClock;
