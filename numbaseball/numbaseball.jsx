// import React, { Component } from 'react';
const React = require('react')
const { Component } = require('react')
// import Try from './Try';

function getNumbers(){

};

class Numbaseball extends Component { 
  state = {
    result:'',
    value:'h1',
    answer: getNumbers(),
    tries:[],
  };
  onSubmitForm = () =>{

  };
  onChangeInput = () =>{

  };

  // fruit = [
  //   {num:1, fruit:'사과', taste:'맛있다'},
  //   {num:2, fruit:'바나나', taste:'몸에 좋다'},
  //   {num:3, fruit:'배', taste:'달다'},
  //   {num:4, fruit:'귤', taste:'시다'},
  //   {num:5, fruit:'포도', taste:'씨가 많다'},
  // ];

  render (){
    return (
      <>
      <h1>{this.state.value}</h1>
        {/* { <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          안녕
        </ul> */} 
      </>
    )
  }
}
// export default Numbaseball;
module.exports = Numbaseball;