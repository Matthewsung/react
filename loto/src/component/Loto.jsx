import React, {Component, useState, useRef, useEffect , useMemo, useCallback } from 'react';
import { timeouts } from 'retry';
import Ball from './Ball';


function getnumber(){
  const candidate = Array(45).fill().map((value,index)=>{ return index + 1});
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push( candidate.splice(Math.floor(Math.random() * candidate.length) , 1) )
  }
  const bonus = shuffle[shuffle.length - 1]
  return [...shuffle.slice(0,6) , bonus];
};


const Loto = () => {
  const lottoNumbers = useMemo( ()=> getnumber(),[])
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeOuts = useRef([]);

  useEffect( ()=>{
    for(let i =0; i < winNumbers.length-1; i++){
      timeOuts.current[i] = setTimeout( ()=>{
        setWinBalls((prevBalls) => [...prevBalls , winNumbers[i] ])
      },100*(i+1))
    }
    timeOuts.current[6] = setTimeout(() => {
      setBonus(winNumbers[winNumbers.length-1])
      setRedo(true)
    },700)
    return ()=>{
      timeOuts.current.forEach((v)=>{
        clearTimeout(v)
      })
    }
  },[timeOuts.current]);

  const onClickRedo = ()=>{
    setWinNumbers(getnumber())
    setWinBalls([])
    setBonus(null)
    setRedo(false)    
    timeOuts.current=[]; 
  }

  
  return(
    <>
        <h1>당첨 숫자</h1>
        <div id="result">
            {winBalls.map((v)=><Ball key={v} number={v}/>)}
        </div>
        <h1>보너스!!!</h1>
        {bonus && <Ball number={bonus}/>}
        {redo && <button onClick={onClickRedo }>한번더!</button>}
        
      </>
  )
}


export default Loto