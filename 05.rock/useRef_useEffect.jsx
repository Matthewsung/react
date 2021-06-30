import React,{ useState, useRef, useEffect } from 'react';

const Prac = () => {

  const aaa = useRef(null);
  const [h2, setH2] = useState('하쇼')
  const interval = useRef(null);
  useEffect( () => {
    let i =0;
    interval.current = setInterval ( () => {
      console.log(i)
      i+=1;
    },1000)
    console.log("111")
    return(
      clearInterval(interval.current),
      console.log("222")
      // setH2('하세요')
    )
  },[h2])
  const onClickButton =()=>{
    setH2('!!!!!!!!!!!!!!') ;
    let i=0
    interval.current = setInterval ( () => {
      console.log(i)
      i+=1;
    },1000)   
  }

  return(
    <>
      <h1>안녕{h2}</h1>
      <button onClick={onClickButton}>누르세요</button>
    </>
  )
}

export default Prac
