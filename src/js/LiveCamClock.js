import { Component } from 'react';
import shuffle from 'lodash/shuffle';
import { OKBlock, OKBlocksGroup } from '@all-user/ok-blocks';
import okPatternsLines from '@all-user/ok-patterns-lines';
okPatternsLines(OKBlock);

let _wrapId = 0;
let _okBlockId = 0;

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
  'black'
];

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

class LiveCamClock extends Component {
  constructor() {
    super();
    this._wrapId = `live-cam-clock-${ _wrapId++ }`;
    this._iframeId = `live-cam-clock-okblock-${ _okBlockId++ }`;
    this.videoPlayers = [];
    this.state = {
      colors: [...COLORS],
      videoIds: [...VIDEO_IDS],
      lineColorIndex: 0,
      paddingColorIndex: 1,
      videoIndex: 0,
      lineWeight: 3,
      appWidth: 0,
      appHeight: 0
    };
  }
  static getVideoSrc(id) {
    return `http://www.youtube.com/embed/${id}?enablejsapi=1&autoplay=1&controls=0&showinfo=0&modestbranding=0`;
  }
  static get windowRatio() { return innerHeight / innerWidth; }
  static get APP_RATIO() { return 8 / 13; }
  static get gridSize() { return this.appWidth / 13; }
  static get appWidth() { this.windowRatio > this.APP_RATIO ? innerWidth : innerHeight / this.APP_RATIO; }
  static get appHeight() { this.appWidth * this.APP_RATIO; }

  get colors() { return this.state.colors; }
  set colors(newValue) { return this.setState({ ...this.state, colors: newValue }); }
  get lineColor() { return this.state.colors[this.state.lineColorIndex]; }
  get paddingColor() { return this.state.colors[this.state.paddingColorIndex]; }

  addVideoPlayer(p) {
    this.videoPlayers.push(p);
  }

  adjustSize() {
    this.setState({
      ...this.state,
      appWidth: LiveCamClock.width,
      appHeight: LiveCamClock.height
    });
    this.videoPlayers.forEach(p => {
      p.width = `${wrapperWidth - 2}px`;
      videoWrapper.style.height = `${wrapperHeight - 2}px`;
      iframe.setAttribute('width', (wrapperHeight - 2) / VIDEO_RATIO);
      iframe.setAttribute('height', wrapperHeight - 2);
      iframe.setAttribute('src', getVideoSrc(...VIDEO_IDS[videoIndex]));
      iframe.addEventListener('load', window.onYouTubeIframeAPIReady);
    });
  }

  componentDidMount() {
    this._okBlock.appendChild();
  }

  render() {
    const styles = {
      appWrap: {
        width: this.state.appWidth,
        height: this.state.appHeight
      },
      videoPlayersWrap: {
        backgroundColor: this.paddingColor
      }
    };

    return (
      <div id={ this._wrapId } style={ this.state.appWrap }>
        <div id={ this._okBlockId } ref={ el => this._okBdlock = el}/>
        <div style={ styles.videoPlayersWrap }>
          { this.videoPlayers.map(p => (
            <YTIframeVideoPlayer
              wrapId={ p.wrapId }
              iframeId={ p.iframeId }
            />
          )) }
        </div>
      </div>
    );
  }
}

export default LiveCamClock;
