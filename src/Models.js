module.exports = {
  get App() { return require('./Models/App'); },
  get Clock() { return require('./Models/Clock'); },
  get LiveCamClock() { return require('./Models/LiveCamClock'); },
  get YoutubeIframeVideoPlayer() { return require('./Models/YoutubeIframeVideoPlayer'); }
};
