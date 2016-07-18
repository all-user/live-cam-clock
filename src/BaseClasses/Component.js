import React from 'react';
import Models from '../Models.js';

class Component extends React.Component {
  constructor(props, ...args) {
    super(props, ...args);
    this.model = new this.Model(props);
  }

  componentWillReceiveProps(props) {
    this.model = new this.Model(props);
  }

  get Model() { return Models[this.constructor.name]; }
}

module.exports = Component;
