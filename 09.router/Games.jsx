import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import NumberBaseball from '../03.numbaseball'
import RSP from '../05.rock'
import Lotto from '../06.loto'
const Games = ()=>{



  return (
    <BrowserRouter>
    <Link to="/number-baseball">숫자야구</Link>
    <Link to="/rock-scissors-paper">가위바위보</Link>
    <Link to="/lotto-generator">로또</Link>
      <div>
        <Route path="/number-baseball" component ={NumberBaseball}/>
        <Route path="/rock-scissors-paper" component ={RSP}/>
        <Route path="/lotto-generator" component ={Lotto}/>
      </div>
    </BrowserRouter>
  )
}

export default Games 