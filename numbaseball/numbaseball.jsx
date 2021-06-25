import React, { Component } from 'react';
import Try from './Try';

function getNumbers(){
};

class Numbaseball extends Component { 
  state = {
    result:'',
    value:'',
    answer: getNumbers(),
    tries:[],
  };
  onSubmitForm = (e) =>{
    e.preventDefault();
    console.log(this.state.value.join(''));
    if(this.state.value === this.state.result.join('')){

    }
    else{

    };
  };
  onChangeInput = (e) =>{
    this.setState({
      value:e.target.value
    })
  };

  fruit = [
    {num:1, fruit:'사과', taste:'맛있다'},
    {num:2, fruit:'바나나', taste:'몸에 좋다'},
    {num:3, fruit:'배', taste:'달다'},
    {num:4, fruit:'귤', taste:'시다'},
    {num:5, fruit:'포도', taste:'씨가 많다'},
  ];

  render (){
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
        </form>
        <div>시도: {this.state.tries.length}</div>
        <ul>
          {this.fruit.map((v,i)=>{
            return (
              <Try key={v.num} v={v} i={i}/>
            )
          })}
        </ul>
      </>
    )
  }
}
export default Numbaseball;