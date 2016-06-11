/* globals YT */
import keyStringDetector from 'key-string';
import moment from 'moment';
import throttle from 'lodash/throttle';
import shuffle from 'lodash/shuffle';
import YTIframeVideoPlayer from './YTIframeVideoPlayer.js';
import LiveCamClock from './LiveCamClock.js';

document.addEventListener('DOMContentLoaded', () => {
  const liveCamClock = new LiveCamClock();

  liveCamClock.adjustSize();

  let iframe = document.querySelector('#player');
  let wrapper = document.querySelector('#wrapper');
  let videoWrapper = document.querySelector('#video-wrapper');
  let videoIndex = 0;
  const SHOW_DURATION = 20;
  const BUFFERING_DURATION = 5;
  const wrapperWidth = WRAPPER_SIZE;
  const wrapperHeight = WRAPPER_SIZE * APP_RATIO;
  wrapper.style.width = `${wrapperWidth}px`;
  wrapper.style.height = `${wrapperHeight}px`;
  videoWrapper.style.width = `${wrapperWidth - 2}px`;
  videoWrapper.style.height = `${wrapperHeight - 2}px`;
  iframe.setAttribute('width', (wrapperHeight - 2) / VIDEO_RATIO);
  iframe.setAttribute('height', wrapperHeight - 2);
  iframe.setAttribute('src', getVideoSrc(...VIDEO_IDS[videoIndex]));
  iframe.addEventListener('load', window.onYouTubeIframeAPIReady);

  let player;
  const playNext = () => {
    let id;
    let duration;
    let startTime;
    [id, duration] = VIDEO_IDS[videoIndex = ++videoIndex % VIDEO_IDS.length];
    startTime = (duration - SHOW_DURATION) * Math.random();
    startTime = startTime < 0 ? 0 : startTime;
    console.log(id);
    console.log(duration);
    player.loadVideoById({
      videoId: id,
      startSeconds: startTime
    });
  };
  const onPlayerReady = ev => {
    let video = ev.target;
    video.mute();
    video.setPlaybackRate(1);
    console.log('status => ' + player.getPlayerState());
    setTimeout((_index => {
      console.log(player.getPlayerState());
      console.log(_index === videoIndex);
      if (player.getPlayerState() === YT.PlayerState.BUFFERING && _index === videoIndex) {
        playNext();
      }
    }).bind(null, videoIndex), BUFFERING_DURATION * 1000);
  };
  const onPlayerStateChange = ev => {
    console.log('onchange');
    switch (ev.data) {
    case -1:
      console.log('-1');
      break;
    case YT.PlayerState.PLAYING:
      console.log('playing');
      setTimeout(player.pauseVideo.bind(player), SHOW_DURATION * 1000);
      break;
    case YT.PlayerState.PAUSED:
      console.log('paused');
      playNext();
      break;
    case YT.PlayerState.BUFFERING:
      console.log('buffering');
      setTimeout((_index => {
        console.log(player.getPlayerState());
        console.log(_index === videoIndex);
        if (player.getPlayerState() === YT.PlayerState.BUFFERING && _index === videoIndex) {
          playNext();
        }
      }).bind(null, videoIndex), BUFFERING_DURATION * 1000);
      break;
    case YT.PlayerState.ENDED:
      console.log('ended');
      playNext();
      break;
    default:
    }
  };

  let minBlocks = new OKBlocksGroup(moment().format('HHmm'), { pattern: 'Lines', size: GRID_SIZE, duration: 200 });
  minBlocks.emblems[2].options = { size: GRID_SIZE * 2 };
  minBlocks.emblems[3].options = { size: GRID_SIZE * 3 };
  minBlocks.emblems.forEach((block, i) => {
    block.dom.classList.add(`min-block-${i}`);
    block.lineColor = LINE_COLOR;
    block.paddingColor = PADDING_COLOR;
    block.weight = LINE_WEIGHT;
    let style = block.dom.style;
    switch (i) {
    case 0:
    case 1:
      style.top = 0;
      style.left = `${GRID_SIZE * i}px`;
      break;
    case 2:
      style.top = `${GRID_SIZE}px`;
      style.left = 0;
      break;
    case 3:
      style.top = 0;
      style.left = `${GRID_SIZE * 2}px`;
      break;
    default:
    }
  });
  minBlocks.appendTo(wrapper);
  let secBlocks = new OKBlocksGroup(moment().format('ss'), { pattern: 'Lines', size: GRID_SIZE * 5, duration: 200 });
  secBlocks.emblems[1].options = { size: GRID_SIZE * 8 };
  secBlocks.emblems.forEach((block, i) => {
    block.dom.classList.add(`sec-block-${i}`);
    block.lineColor = LINE_COLOR;
    block.paddingColor = PADDING_COLOR;
    block.weight = LINE_WEIGHT;
    let style = block.dom.style;
    switch (i) {
    case 0:
      style.top = `${GRID_SIZE * 3}px`;
      style.left = 0;
      break;
    case 1:
      style.top = 0;
      style.left = `${GRID_SIZE * 5}px`;
      break;
    default:
    }
  });
  secBlocks.appendTo(wrapper);

  let interruptMin = [null, null, null, null];
  let interruptSec = [null, null];
  const INTERRUPT_DURATION = 2000;
  const INTERRUPT_DISPLAY_TIME = 5000;
  const makeRandomInterruption = () => {
    const i = 6 * Math.random() | 0;
    let _arr;
    let _i;
    let _block;
    let _char;
    return new Promise((resolve, reject) => {
      if (i < 4) {
        _arr = interruptMin;
        _i = i;
        _block = minBlocks.emblems[_i];
      } else {
        _arr = interruptSec;
        _i = i - 4;
        _block = secBlocks.emblems[_i];
      }
      _arr[_i] = _block.allValidChars[_block.allValidChars.length * Math.random() | 0];
      _block.options = { duration: INTERRUPT_DURATION };
      _char = _block.char;
      setTimeout(resolve, INTERRUPT_DURATION + INTERRUPT_DISPLAY_TIME);
    }).then(() => {
      return new Promise((resolve, reject) => {
        _arr[_i] = _char;
        setTimeout(resolve, INTERRUPT_DURATION);
      });
    }).then(() => {
      _arr[_i] = null;
      _block.options = { duration: 200 };
    });
  };
  const makeInterruption = (minStr, secStr) => {
    let _minChars = minBlocks.toString();
    let _secChars = secBlocks.toString();
    return new Promise((resolve, reject) => {
      let validChars = minBlocks.emblems[0].allValidChars;
      if (minStr) {
        interruptMin = [...minStr];
      } else {
        interruptMin = interruptMin.map(() => validChars[validChars.length * Math.random() | 0]);
      }
      if (secStr) {
        interruptSec = [...secStr];
      } else {
        interruptSec = interruptSec.map(() => validChars[validChars.length * Math.random() | 0]);
      }
      minBlocks.options = { duration: INTERRUPT_DURATION };
      secBlocks.options = { duration: INTERRUPT_DURATION };
      setTimeout(resolve, INTERRUPT_DURATION + INTERRUPT_DISPLAY_TIME);
    }).then(() => {
      return new Promise((resolve, reject) => {
        interruptMin = [..._minChars];
        interruptSec = [..._secChars];
        setTimeout(resolve, INTERRUPT_DURATION);
      });
    }).then(() => {
      interruptMin.fill(null);
      interruptSec.fill(null);
      minBlocks.options = { duration: 200 };
      secBlocks.options = { duration: 200 };
    });
  };

  const intervalRandomInterruption = interval => {
    setTimeout(() => {
      makeRandomInterruption()
        .then(intervalRandomInterruption.bind(null, interval));
    }, interval);
  };
  const intervalInterruption = interval => {
    setTimeout(() => {
      makeInterruption()
        .then(intervalInterruption.bind(null, interval));
    }, interval);
  };

  // intervalInterruption(10000);
  // intervalRandomInterruption(6000);

  const masking = (str, arr) => {
    return arr.map((interrupt, i) => interrupt == null ? str[i] : interrupt);
  };
  const _updateClock = timestamp => {
    const now = moment();
    const minStr = minBlocks.toString();
    const secStr = secBlocks.toString();
    const nowMin = masking(now.format('HHmm'), interruptMin);
    const nowSec = masking(now.format('ss'), interruptSec);
    if (nowSec !== secStr) {
      secBlocks.map(nowSec);
    }
    if (nowMin !== minStr) {
      minBlocks.map(nowMin);
    }
  };
  const updateClock = throttle(_updateClock, 100);
  const handleRAF = timestamp => {
    updateClock(timestamp);
    requestAnimationFrame(handleRAF);
  };

  requestAnimationFrame(handleRAF);

  const changeWeight = (block, lighter) => {
    if (lighter) {
      block.lighter();
    } else {
      block.bolder();
    }
  };
  const changeLineColor = block => {
    block.lineColor = COLORS[lineColorIndex];
  };
  const changePaddingColor = block => {
    block.paddingColor = COLORS[paddingColorIndex];
  };
  const lighter = block => changeWeight(block, true);
  const bolder  = block => changeWeight(block, false);
  const detector = new keyStringDetector();
  document.addEventListener('keydown', ev => {
    let key = detector.detect(ev);
    switch (key) {
    case 'Shift+J':
      minBlocks.emblems.forEach(lighter);
      secBlocks.emblems.forEach(lighter);
      break;
    case 'Shift+K':
      minBlocks.emblems.forEach(bolder);
      secBlocks.emblems.forEach(bolder);
      break;
    case 'Shift+C':
      paddingColorIndex = ++paddingColorIndex % COLORS.length;
      minBlocks.emblems.forEach(changePaddingColor);
      secBlocks.emblems.forEach(changePaddingColor);
      document.body.style.backgroundColor = COLORS[paddingColorIndex];
      break;
    case 'Shift+L':
      lineColorIndex = ++lineColorIndex % COLORS.length;
      minBlocks.emblems.forEach(changeLineColor);
      secBlocks.emblems.forEach(changeLineColor);
      break;
    default:
    }
  });
});
