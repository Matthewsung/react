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
  if(number === 0){
    return '바위'
  }
  else if(number === 568){
    return '가위'
  }
  else if(number === 284){
    return '보'
  }
}
const RSP = ()=>{
  
  const [result,setResult] = useState('');
  const [imgCoord,setImgCoord] = useState(0);
  const [score,setScore] = useState(0);

  const interval = useRef();

  useEffect(()=>{
    interval.current = setInterval (changeHand,100);
    return ()=>{
      clearInterval(interval.current)
    }
  },[imgCoord]);

  const changeHand =()=>{
    if(imgCoord === 0 ){
      setImgCoord(284)
    }
    else if(imgCoord === 284 ){
      setImgCoord(568)
    }
    else if(imgCoord === 568 ){
      setImgCoord(0)
    }
  }

  const onClickBtn = (choice) => () => {
    if (interval.current) {
      clearInterval(interval.current);
      interval.current = null;
      const myScore = scores[choice];
      const cpuScore = scores[computerChoice(imgCoord)];
      const diff = myScore - cpuScore;
      if (diff === 0) {
        setResult('비겼습니다!');
      } else if ([-1, 2].includes(diff)) {
        setResult('이겼습니다!');
        setScore((prevScore) => prevScore + 1);
      } else {
        setResult('졌습니다!');
        setScore((prevScore) => prevScore - 1);
      }
      setTimeout(() => {
        interval.current = setInterval(changeHand, 100);
      }, 1000);
      
    }
  };
  return (
    <div className="content">
      <div id="computer" style={{background:`url(./img/rsp.jpg) ${imgCoord}px 0`}}></div>
      <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
      <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
      <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
      <h1>{result}</h1>
      <div className="score">총 점수는 : {score}</div>
    </div>
  )
  }

export default RSP
