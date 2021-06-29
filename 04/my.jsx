import React,{useState, useRef} from 'react';

const My = ()=>{

  const [state,setState] = useState('waiting');
  const [message,setMessage] = useState('누르면 시작합니다');
  const [result, setResult] = useState([]);
  
  const timeout =useRef(null);
  const startTime =useRef();
  const endTime =useRef();

  const onClickDiv = () => {
    if(state == 'waiting'){
      setState('ready');
      setMessage('색이 바뀌면 누르세요')
      startTime.current = new Date();
      setTimeout(() => {
        setState('now');
        setMessage('지금 누르세요!!!!!!!!');
      }, Math.round(Math.random() * 1000) + 1000);
    }
    else if(state == 'ready'){
      setState('waiting');
      setMessage('예측하고 하지마세요');
      setResult([]);
    }
    else if(state == 'now'){
      endTime.current = new Date();
      setState('waiting');
      setMessage('시작하려면 누르세요');
      setResult((prev) => {
        return [...prev , endTime.current - startTime.current]
      });
    }
  };
  const ShowAverage = () => {
    return(
      result.length == 0?console.log():<div className="text">평균 반응속도는 {result.reduce((a,b) => a + b) / result.length}초 입니다</div>
    )
  }

  return  (
    <>
      <div id="screen" className={state} onClick={onClickDiv}>{message}</div>
      {ShowAverage()}
    </>
    )
}

export default My
