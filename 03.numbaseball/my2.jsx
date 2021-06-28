import React, { Component , memo } from 'react';

const Try2 = memo(({Try})=>{
  return (
    <li>
        <b>{Try.try}</b>는 {Try.result} 
      </li>
  )
})
// class Try2 extends Component {
//   render(){
//     return (
//       <li>
//         <b>{this.props.Try.try}</b>는 {this.props.Try.result} 
//       </li>
//     )
//   }
// }

export default Try2