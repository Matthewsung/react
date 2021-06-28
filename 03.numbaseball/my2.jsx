import React, {Component} from 'react';

class Try2 extends Component {

  render(){
    return (
      <li><b>{this.props.Try.try}</b>는 {this.props.Try.result} </li>
    )
  }
}

export default Try2