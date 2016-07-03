import React from 'react';
import Models from '../../Models';
import BaseClasses from '../../BaseClasses';
import { OKBlock, OKBlocksGroup } from '@all-user/ok-blocks';
require('@all-user/ok-patterns-lines')(OKBlock);

class Clock extends BaseClasses.Component {
  componentDidMount() {
    const GRID_SIZE = this.Model.gridSize;
    const minBlocks = new OKBlocksGroup(this.model.state.hour + this.model.state.min, { pattern: 'Lines', size: GRID_SIZE, duration: 200 });
    minBlocks.emblems[2].options = { size: GRID_SIZE * 2 };
    minBlocks.emblems[3].options = { size: GRID_SIZE * 3 };
    minBlocks.emblems.forEach((block, i) => {
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
    minBlocks.appendTo(this.root);
    let secBlocks = new OKBlocksGroup(this.model.state.sec, { pattern: 'Lines', size: GRID_SIZE * 5, duration: 200 });
    secBlocks.emblems[1].options = { size: GRID_SIZE * 8 };
    secBlocks.emblems.forEach((block, i) => {
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
    secBlocks.appendTo(this.root);
  }

  render() {
    return <div ref={ el => this.root = el }></div>;
  }
}

export default Clock;
