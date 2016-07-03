export default {
  get App() { return require('./Components/App/AppModel'); },
  get Clock() { return require('./Components/Clock/ClockModel'); },
  get LiveCamClock() { return require('./Components/LiveCamClock/LiveCamClockModel'); },
  get YoutubeIframeVideoPlayer() { return require('./Components/YoutubeIframeVideoPlayer/YoutubeIframeVideoPlayerModel'); }
};
