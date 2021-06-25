import React, { Component } from 'react';
import Try from './Try';

function getNumbers(){
  for(let i=0; i < 1000; i++){
    if(num.length >= 4){break}
    tmp = Math.round(Math.random()* 8 +1);
    this.state.num.indexOf(tmp)>-1?console.log:this.state.num.push(tmp)
  }
  return num;
};

class Numbaseball extends Component { 
  state={
    value:'',
    result:'',
    aaa:'',
    num : [],
    tmp:'',
    strike : '0',
    ball : '0',
  };
  onChangeInput = (c) => {
    c=c.value
  };
  onSubmitForm = (e)=>{
    e.preventDefault();
    for(let i =0; i<this.state.aaa.length; i++){
      if(getNumbers().join('').indexOf(this.state.aaa[i]) > -1 ){
        getNumbers().join('').indexOf(this.state.aaa[i]) === i?strike += 1:ball +=1;
      }
      else{
        console.log("겹치는게 없다");
      }
    }
    // this.state.result.append(`제출한 값 : ${this.state.aaa} strike:  ${this.state.strike},ball: ${this.state.ball}`)
    if(getNumbers().join('') == this.state.aaa){
      this.state.result.append(`홈런입니다`)
    }
  };
  render(){
    return(
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input onChange={this.onChangeInput}></input>
        </form>
      </>
    )
  }
  // const value = document.querySelector('#value');
  // const Root = document.getElementById('#root');
  // let num = [];
  // let tmp ;
  
  // function onSubmit(){
  //   let strike = 0;
  //   let ball = 0;
  //   let aaa = value.value;

  //   event.preventDefault();

    // for(let i =0; i<aaa.length; i++){
    //   if(getNumber().join('').indexOf(aaa[i]) > -1 ){
    //     getNumber().join('').indexOf(aaa[i]) === i?strike += 1:ball +=1;
    //   }
    //   else{
    //     console.log("겹치는게 없다");
    //   }
    // }
    // Root.append(`제출한 값 : ${aaa} strike:  ${strike},ball: ${ball}`)
    // let br = document.createElement('br')
    // Root.append(br)
    // console.log(getNumber())
    // if(getNumber().join('') == aaa){
    //   Root.append(`홈런입니다`)
    // }
  // }















  // state = {
  //   result:'',
  //   value:'',
  //   answer: getNumbers(),
  //   tries:[],
  // };
  // onSubmitForm = (e) =>{
  //   e.preventDefault();
  //   console.log(this.state.value.join(''));
  //   if(this.state.value === this.state.result.join('')){

  //   }
  //   else{

  //   };
  // };
  // onChangeInput = (e) =>{
  //   this.setState({
  //     value:e.target.value
  //   })
  // };

  // fruit = [
  //   {num:1, fruit:'사과', taste:'맛있다'},
  //   {num:2, fruit:'바나나', taste:'몸에 좋다'},
  //   {num:3, fruit:'배', taste:'달다'},
  //   {num:4, fruit:'귤', taste:'시다'},
  //   {num:5, fruit:'포도', taste:'씨가 많다'},
  // ];

  // render (){
  //   return (
  //     <>
  //       {/* <h1>{this.state.result}</h1>
  //       <form onSubmit={this.onSubmitForm}>
  //         <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
  //       </form>
  //       <div>시도: {this.state.tries.length}</div>
  //       <ul>
  //         {this.fruit.map((v,i)=>{
  //           return (
  //             <Try key={v.num} v={v} i={i}/>
  //           )
  //         })}
  //       </ul> */}
  //     </>
  //   )
  // }
}
export default Numbaseball;