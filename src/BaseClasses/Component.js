import React from 'react';
import Models from '../Models.js';

class Component extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.model = new this.Model(props.state);
  }

  componentWillReceiveProps(props) {
    this.model = new this.Model(props.state);
  }

  get Model() { return Models[this.constructor.name]; }
}

module.exports = Component;
