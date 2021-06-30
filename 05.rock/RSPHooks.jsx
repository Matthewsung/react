import React,{ useState , useRef, useEffect } from 'react';

const scores ={
  바위: 0,
  가위: 1,
  보 : -1,
}

const comScores ={
  바위: 0,
  가위:568,
  보 : 284,
}

const computerChoice = (number) => {
  if(number == 0){
    return '바위'
  }
  else if(number == 568){
    return '가위'
  }
  else if(number == 284){
    return '보'
  }
}
const RSPHooks =()=>{
  

  const [result,setResult] = useState('');
  const [imgCord,setImgCord] = useState(0);
  const [score,setScore] = useState(0);

  const interval = useRef();

  useEffect(()=>{
    interval.current = setInterval (changeHand(),1000);
    return ()=>{
      clearInterval(interval.current)
    }
  },[]);

  const changeHand =()=>{
    if(imgCord == 0 ){
      setImgCord(284)
    }
    else if(imgCord == 284 ){
      setImgCord(568)
    }
    else if(imgCord == 568 ){
      setImgCord(0)
    }
  }

  const onClickBtn = (choice) =>{
    clearInterval(interval.current);
    const myScore = scores[choice];
    const computerScore = scores[computerChoice(setImgCord)];
    const differ = myScore - computerScore
    if([0].includes(differ)){
      setResult('비김')
    }
    else if([1, -2].includes(differ)){
      setResult('짐')
      setResult((prevState)=>{
        prevState.score - 1
      })
    }
    else if([-1, 2].includes(differ)){
      setResult('이김')
      setResult((prevState)=>{
        prevState.score + 1
      })
    }
    setTimeout(() => {
      interval.current = setInterval (changeHand(),1000);
    }, 2000);
  }
  return (
    <>
      <div id="computer" style={{background:`url(./img/rsp.jpg) ${imgCord}px 0`}}></div>
      <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
      <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
      <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      <h1>{result}</h1>
      <div>총 점수는 : {score}</div>
    </>
  )
  }

export default RSPHooks
