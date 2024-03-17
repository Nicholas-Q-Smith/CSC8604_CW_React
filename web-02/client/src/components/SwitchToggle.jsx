import React from 'react';

import Switch from 'react-switch';

import { Component } from 'react'

class SwitchToggle extends Component {
    constructor() {
      super();
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(checked) {
      this.setState({ checked });
    }
  
    render() {
      return (
        <label>
          <span>Auto Update</span>
          <Switch onChange={this.handleChange} checked={this.state.checked} />
        </label>
      );
    }

    
  }
  export default SwitchToggle;