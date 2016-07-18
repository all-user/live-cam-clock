/* globals YT */
import keyStringDetector from 'key-string';
const moment = require('moment');
const throttle = require('lodash/throttle');
const shuffle = require('lodash/shuffle');

document.addEventListener('DOMContentLoaded', () => {
  let tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  let firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  let { OKBlock } = require('@all-user/ok-blocks');
  let { OKBlocksGroup } = require('@all-user/ok-blocks');
  require('@all-user/ok-patterns-lines')(OKBlock);

  const WINDOW_RATIO = innerHeight / innerWidth;
  const APP_RATIO = 8 / 13;
  const VIDEO_RATIO = 9 / 16;
  const WRAPPER_SIZE = WINDOW_RATIO > APP_RATIO ? innerWidth : innerHeight / APP_RATIO;
  const GRID_SIZE = WRAPPER_SIZE / 13;
  const LINE_WEIGHT = 3;
  const COLORS = [
    'transparent',
    'white',
    '#fb8e19',
    '#b74be9',
    '#40beff',
    '#68dc78',
    '#f1569b',
    '#ffcc00',
    '#3695ff',
    '#b9ff12',
    '#003cff',
    '#b7b7b7',
    'black',
  ];
  let lineColorIndex = 0;
  let paddingColorIndex = 1;
  const LINE_COLOR = COLORS[lineColorIndex];
  const PADDING_COLOR = COLORS[paddingColorIndex];
  const VIDEO_IDS = shuffle([
    ['6q36pnzcw70', 0], // 渋谷
    ['fx-6lLDAjPs', 0], // 横浜
    ['CHl1qC9ay8s', 0], // Taiwan
    ['YH3Nhp0R9t8', 0], // Amsterdam Dam
    ['njCDZWTI-xg', 0], // Nasa
    ['I6KoBYTQG_I', 0], // Port de Québec
    ['JzCsc4UeUfs', 0], // Oxford
    ['p6bdkDQmgzA', 0], // City of Auburn Toomer's Corner Webcam 1
    ['JkhcrT7nYXs', 0], // WebCam.NL | www.badhuys.com - live camera Vlieland - strand WestCord hotel.
    ['TStjLJIc3DY', 0], // Live Shark Cam (Lagoon View) | California Academy of Sciences
    ['PsL4FH_U2K4', 0], // Aosta Sarre Italy Statale 26 ferrovia treno Aosta Pré Saint Didier LiveCam Live Cam Web Cam
    ['3WYU3F1Lc3c', 0], // Live sea otter cam 1 - Seattle Aquarium
    ['1CqG08fHYFE', 0], // ✔【LIVE】 ITM SKY CAM ◆大阪国際空港32Lライブカメラ Osaka-Int'l-Airport (ITAMI) operation hour 07:00-21:00JST
    ['cObrnhmjfxU', 0], // Venice Italy Live Webcam - Rialto Bridge in Live Streaming from Palazzo Bembo Venezia - Live Full HD
    ['5fp1A1oc02o', 0], // Venice Italy Live Webcam - Campo Santa Maria Formosa in Live Streaming from Ruzzini Palace Hotel
    ['TSVME4FzQAQ', 0], // Lausanne, pont Bessières
    ['GdhEsWcV4iE', 0], // Lausanne, Place de la Palud
    ['pOOiXRsQ4Eo', 0], // Unikat - Sokółka - Transmisja NA ŻYWO
    ['KLlwAoQlMgo', 0], // WebCam.NL | www.dehavenvanzandvoort.nl - live webcam Zandvoort strand
    ['7fgFhO13hDI', 0], // Market Place Web Cam
    ['6m0ByC__goQ', 0], // Village of Tilton - Traffic Camera
    ['qmwlvPeBRC4', 0], // 東京タワーライブカメラ / TOKYOTOWER LIVE CAMERA
    ['tRsuQvxuNfM', 0], // LIVE CAMERA】渋谷マークシティ
    ['8B3jQP9gNyg', 0], // Caroline's Kids Rescue Kitchen Webcam
    ['5FrCtTCYVWI', 0], // WebCam.NL | www.madametussauds.nl - HD PTZ camera Amsterdam.
    ['GZnb3jQ2YZo', 0], // Avon Lake Bald Eagles
    ['BTzUNVk19D4', 0], // Honey Bee Cam Live!! -Live hive inspection today @ 7pm EST (Westfield Farm & Gardens)
    ['7ZPG1ttW0rU', 0], // Boulder County Fairgrounds Osprey Camera
    ['uenf3ZEEDeI', 0], // Live Owl Cam from Silicon Valley
    ['7L4R5a86iZA', 0], // Les Arcs - Livecam Vagère
    ['L5Tg_t7vjDs', 0], // Cabana Bâlea Lac Live - Axis P1365-E and CamStreamer
    ['wSNIOpT82Dc', 0], // Cabana Bâlea Lac Live - Axis P1428-E and CamStreamer
    ['KstNueqOjoo', 0], // LIVE Key West Seaport Cam
    ['_sJ_NJmN8SM', 0], // BigTrains.TV Live Streaming Cam now w/sound CP 10 Stream Now
    ['zME4DDgSpwA', 0], // SUNTEC Fountain of Wealth Live - Using Axis P3364 and NetRex CamStreamer
    ['lgCHLQb6n6I', 0], // Starry night sky Livecam★★★星空夜景天体観測ライブカメラ
    ['eCr1bsOaS2I', 0], // La Grotte de Lourdes en direct (live)
    ['Ubf5HDhbGTA', 0], // London Live - Weather Cam/Data Stream
    ['leChPshf6ak', 0], // Live webcam | Epe - Hoofdstraat
    ['93k2DhigIXc', 0], // CopsDoughnuts Live
    ['-v-gzrL6PNY', 0], // Southwest Florida Eagle Cam
    ['p_uLHZjI2Kk', 0], // LIVE: The Ultimate Kitten & Cat Cam / Live aus dem Katzenkorb
    ['tP_v3LdZ0fA', 0], // Bocianie Gniazdo pod Sokółką LIVE
    ['jEIyIAIvVSk', 0], // Fokarium w Helu na żywo / Webcam - Kamera druga
    ['wxJC3dFmOOU', 0], // Stary Sacz rynek na żywo HD live Restauracja Marysieńka zaprasza. www.starysacz24.eu
    ['eu5PTvpoWeQ', 0], // Parafia św. Pawła Apostoła w Bochni [transmisja na żywo]
    ['_P8aZKew2Qk', 0], // Transmisja na żywo
    ['frJhxpSSv40', 0], // Beograd Com Live Stream
    // ['N7X030hrg2s', 0], // フジテレビお台場ライブカメラ
    ['31vNARRU1SU', 0], // Okeanos Explorer - Camera 3
    ['c_oWfGMH5jg', 0], // Kamera z Zambrowa - Zambrow city - live cameras - Europe, Poland, Zambrów Polska - zambrow.org 2/5
    ['cCqIVbDZcGU', 0], // Degirmenburnu Residence Bodrum City Cam
    ['GyYPSZMQ9Hg', 0], // Johnson Street Bridge Live Webcam
    ['ArVmnth5jB4', 0], // Makkah Live HD
    ['4OoKpZWJASY', 0], // قناة السنة النبوية
    ['O4VSUdQUIZI', 0], // City Cam, WebcamSittard: Town Square Sittard, Limburg (the Netherlands) Axis Q6128-E via Camstreamer
    ['gGVdY2D-GSI', 0], // View from Huntington Beach Pier
    ['DEWO-4vDDcs', 0], // Verona Italy Livecam Webcam Live Cam Streaming Piazza Erbe Giulietta e Romeo
    ['t-kfK2JiJQc', 0], // WebCam.NL | www.zuidas.nl - LIVE streaming HD Pan Tilt Zoom camera
    ['EEXz6wfVRes', 0], // WebCam Bol LIVE!
    ['w9bBY3znPOU', 0], // Northwestern Rock Webcam
    ['aUKgCNuqUu0', 0], // Live: Geovision GV-MFDC1501 Cloud Camera
    // ['D4KIdVrIq0w', 0], // Africa24 Live
    // ['xmEhX5Ourzw', 164],
      // ['ILHoyj0lRiY', 171],
      // ['zsOb5sPcEiM', 180],
    // ['0qfoYXaOqDY', 391],
      // ['YKo6VPpvCUc', 12],
    // ['1s_lTyhBFNY', 46],
      // ['7eyYe-MN1Nc', 1903],
      // ['5Ehd4cFEvnQ', 218],
      // ['VOgpV0jwhDc', 108],
      // ['PC77lsC_q_U', 149],
    // ['tyHa3U-iRaM', 131],
    // ['bNd8JkEptiM', 37],
    // ['fmujLFHRrAA', 912],
    // ['Wc_PzQvr-OQ', 65],
      // ['FnxwlFVohR4', 353],
      // ['OWgmXoCyaXc', 163],
      // ['u6ogYNm4WFI', 74],
      // ['qoLQizjh30k', 101],
    // ['Vpv5bS9MK-w', 421],
    // ['yEowbmxLqEM', 341],
      // ['ldRhniqAI6s', 2129],
    // ['-pVHC1DXQ7U', 229],
      // ['3W3s2VWvYYI', 74],
      // ['r0U83wtmk28', 105],
      // ['laWkmljkrGo', 101],
    // ['Jr5BhBxWKT8', 323], // 上海
      // ['7tOKSEtxjlU', 301], // ジャングル
      // ['Kq_cptHufTQ', 156], // マサイ
      // ['dL0lNGXoP8E', 146], // enter the void
    // ['ISb8HjrcyJM', 533], // enter the void
    // ['1t4zmiNR7tQ', 226], // drone
      // ['cnYkifGvqHI', 260], // new york city
      // ['lK_70f7PamE', 30], // better call saul
    // ['rVoPzA0g3Ac', 277], // taking heads
  ]);

  document.body.style.backgroundColor = COLORS[paddingColorIndex];

  const getVideoSrc = id => {
    return `http://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&controls=0&showinfo=0&modestbranding=0`;
  };

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
  window.onYouTubeIframeAPIReady = () => {
    player = new YT.Player('player', {
      events: {
        onReady: onPlayerReady,
        onStateChange: onPlayerStateChange,
        onError: err => {
          console.log('onerror');
          console.log(err);
          console.log(VIDEO_IDS[videoIndex]);
          playNext();
        }
      }
    });
  };

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
  const handleRaf = timestamp => {
    updateClock(timestamp);
    requestAnimationFrame(handleRaf);
  };

  requestAnimationFrame(handleRaf);

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
