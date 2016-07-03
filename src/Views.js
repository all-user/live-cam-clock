export default {
  get App() { return require('./Components/App/AppContainer'); },
  get Clock() { return require('./Components/Clock/ClockContainer'); },
  get LiveCamClock() { return require('./Components/LiveCamClock/LiveCamClockContainer'); },
  get YoutubeIframeVideoPlayer() { return require('./Components/YoutubeIframeVideoPlayer/YoutubeIframeVideoPlayerContainer'); }
};
