import React, { useState, useRef }from 'react';
import { render } from 'react-dom';

const ResponseHooks = ()=>{
  const [state,setState] = useState('waiting');
  const [message,setMessage] = useState('클릭해서 시작하세요');
  const [result,setResult] = useState([]);
  const timeout = useRef(null);
  const startTime = useRef(0);
  const endTime = useRef(0);

  const onClickScreen =() => {
    if(state === 'waiting'){
      setState('ready');
      setMessage('색이 바뀌면 클릭!!')
      
      timeout.current = setTimeout( () => {
        setState('now');
        setMessage('지금 클릭하세요')
      }, Math.round(Math.random() * 1000) + 2000 );
      startTime.current = new Date()
    }
    else if(state == 'ready'){
      setState('waiting');
      setMessage('너무 성급하네요 빨간색이되면 클릭하세요');
      setResult([]);
      clearTimeout(timeout.current)
    }
    else if(state == 'now'){
      endTime.current = new Date();
      setState('waiting');
      setMessage('클릭해서 시작하세요')
      setResult((prevResult) => { 
        return [...prevResult, endTime.current - startTime.current]
      })
    }
  }

  
  const renderAverage =() => {
    return result.length === 0 
    ? null
    : <div className="result"> 평균 시간 : {result.reduce((a,b) => (a + b) / result.length)}초 </div>;
  }
    return(
      <div className="content">
        <div id="screen2" className={state} onClick={onClickScreen}>
          {message}
        </div>
        {renderAverage()}
      </div>
    )
}

export default ResponseHooks