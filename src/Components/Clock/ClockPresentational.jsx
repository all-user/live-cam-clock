import React from 'react';
import Models from '../../Models';
import BaseClasses from '../../BaseClasses';
import { OKBlock, OKBlocksGroup } from '@all-user/ok-blocks';
require('@all-user/ok-patterns-lines')(OKBlock);
import scopedStyles from './Clock.styl';
import { updateClock } from '../../Actions.js';
import throttle from 'lodash/throttle';

class Clock extends BaseClasses.Component {
  constructor(...args) {
    super(...args);
    this.handleRaf = this.handleRaf.bind(this);
    this.throttledDispatchUpdateClock = throttle(this.throttledDispatchUpdateClock.bind(this), 100);
  }

  updateStyles() {
    const GRID_SIZE = this.model.gridSize;
    this.minBlocks.emblems[0].options =
    this.minBlocks.emblems[1].options = { size: GRID_SIZE };
    this.minBlocks.emblems[2].options = { size: GRID_SIZE * 2 };
    this.minBlocks.emblems[3].options = { size: GRID_SIZE * 3 };
    this.minBlocks.emblems.forEach((block, i) => {
      block.lineColor = this.model.state.lineColor;
      block.paddingColor = this.model.state.paddingColor;
      block.weight = this.model.state.lineWeight;
      let style = block.dom.style;
      style.position = 'absolute';
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
    this.secBlocks.emblems[0].options = { size: GRID_SIZE * 5 };
    this.secBlocks.emblems[1].options = { size: GRID_SIZE * 8 };
    this.secBlocks.emblems.forEach((block, i) => {
      block.lineColor = this.model.state.lineColor;
      block.paddingColor = this.model.state.paddingColor;
      block.weight = this.model.state.lineWeight;
      let style = block.dom.style;
      style.position = 'absolute';
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
  }

  updateClock() {
    const minStr = this.minBlocks.toString();
    const secStr = this.secBlocks.toString();
    const nowMin = this.model.state.hour + this.model.state.min;
    const nowSec = this.model.state.sec;
    if (nowSec !== secStr) {
      this.secBlocks.map(nowSec);
    }
    if (nowMin !== minStr) {
      this.minBlocks.map(nowMin);
    }
  }

  throttledDispatchUpdateClock(timestamp) {
    this.model.props.dispatch(updateClock(timestamp));
  }

  handleRaf(timestamp) {
    this.throttledDispatchUpdateClock(timestamp);
    this.clockRafId = requestAnimationFrame(this.handleRaf);
  }

  componentDidUpdate() {
    this.updateStyles();
    this.updateClock();
  }

  componentDidMount() {
    const minBlocks = new OKBlocksGroup(this.model.state.hour + this.model.state.min, { pattern: 'Lines', duration: 200 });
    const secBlocks = new OKBlocksGroup(this.model.state.sec, { pattern: 'Lines', duration: 200 });
    this.minBlocks = minBlocks;
    this.secBlocks = secBlocks;
    this.updateStyles();
    minBlocks.appendTo(this.root);
    secBlocks.appendTo(this.root);
    this.clockRafId = requestAnimationFrame(this.handleRaf);
  }

  render() {
    const styles = {
      root: {
        width: `${ this.model.state.width }px`,
        height: `${ this.model.state.height }px`
      }
    };

    return <div className={ scopedStyles.wrapper } style={ styles.root } ref={ el => this.root = el }></div>;
  }
}

export default Clock;
