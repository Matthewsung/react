import React, { Component } from 'react';

// class Try extends Component {
//   render() {
//     return (
//       <li >
//         <b>{this.props.tryInfo.try}</b> - {this.props.tryInfo.result}
//       </li>
      
//     )
//   }
// };

const Try = ({tryInfo})=>{
  return(
    <li>
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
}

export default Try;