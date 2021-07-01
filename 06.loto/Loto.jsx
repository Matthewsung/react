import React, {Component} from 'react';
import Ball from './Ball';

function getWinNumber(){
  
  const candidate = Array(45).fill().map((v,i) => { return i + 1 });
  const shuffle =[];
  while (candidate.length > 0){
    shuffle.push( candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  };
  const bonusNumber = shuffle[shuffle.length - 1];
  const windNumber = shuffle.slice( 0 , 6 ).sort((p , c)=>{ p - c });
  console.log(windNumber,bonusNumber)
  return [...windNumber,bonusNumber];
}

class Loto extends Component {
  state = {
    windNumbers:getWinNumber(),
    winBalls:[],
    bonus:null,
    redo:false,
  };
  render (){
    const{winBalls,bonus, redo } = this.state;
    return(
      <>
        <div>당첨 숫자</div>
        <div id="결과창">
            {windBalls.map((v)=><Ball key={v} number={v}/>)}
        </div>
        <div>보너스!</div>
        {bonus &&<Ball number={v}/>}
        <button onClick={redo? this.onClickRedo :()=>{}}>한번더!</button>
      </>
    )
  }



}


export default Loto