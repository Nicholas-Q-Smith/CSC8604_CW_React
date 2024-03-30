import React from 'react';

import Switch from 'react-switch';

import { Component } from 'react'

/* This defines the object class for the auto-update switch
*  which is used in the navbar to toggle the auto-update
*/

class SwitchToggle extends Component {

    constructor(props) {
      super(props);
      this.state = { checked: false };
      this.handleChange = this.handleChange.bind(this);
      
    }
    
    /*Internal functon to set
    state to the current value of the switch
    */
    handleChange(checked) {
      this.setState({ checked });
      this.props.onToggle(checked);
    }
    
    /*Render function to display the switch
    */
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