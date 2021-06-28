import e from 'express';
import React,{ Component } from 'react';
import Try from './Try';

function getNumbers(){
  let num =[];
  let tmp;
  for(let i =0; i<9999; i++){
    tmp = Math.round(Math.random()*8+1);
    !num.includes(tmp)?num.push(tmp):console.log()
    if(num.length == 4){break}
  }
  return num
};

class Numberbase extends Component{
  state={
    result:'',
    value:'',
    answer:getNumbers(),
  };
  onSubmitForm = (e) => {
    e.preventDefault();
  };

  onChangeInput = (e) => {
    this.setState({
      value:e.target.value
    })
  };

  render(){
    return (
      <>
        <h1>실패입니다</h1>
        <form onSubmit={this.onSubmitForm}>
          <input value={this.state.value} onChange={this.onChangeInput}/>
        </form>
        <ul>
          <li>XX볼 XX스트라이크입니다</li>
        </ul>

      </>
    )
  }

};

export default Numberbase;