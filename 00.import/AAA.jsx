import React, { Component } from 'react';

class AAA extends Component {
  state={
    value:"안녕"
  };
  render(){
    return (
      <h1>{this.state.value}</h1>
    )
  }
}

export default AAA;