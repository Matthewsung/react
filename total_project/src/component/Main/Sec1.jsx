import React,{useState,useEffect} from 'react'
import CanvasCircle from './CanvasCircle'
const canvasOption=[
  {
    id:1,
    divId : "sec_1_cir1",
    width:window.innerWidth/2,
    end : 2*Math.PI,
    color: "#fff"
  },
  {
    id:2,
    divId : "sec_1_cir2",
    width:"400",
    end : 2*Math.PI,
    color: "#bed8ef"
  },
  {
    id:3,
    divId : "sec_1_cir3",
    width:"200",
    end : 2*Math.PI,
    color: "#053f73"
  },
  {
    id:4,
    divId : "sec_1_cir4",
    width:"100",
    end : 2*Math.PI,
    color: "#bed8ef"
  },
]
const SecTxtOption=['책임감있는', '노력하는',]
const Sec1 = ()=>{
  const [secTxt, setSecTxt]= useState('')
  let index = 0;
  useEffect(() => {
    const secP = document.querySelector('.sec_1_txt p')
    setInterval(()=>{
      secP.style.opacity = 1
      setSecTxt(SecTxtOption[index % SecTxtOption.length])
      index++
    },2000)
    
  }, [])
  return(
    <section className="sec_1">
        {Array(canvasOption.length).fill().map( (v,i) => <CanvasCircle key = {canvasOption[i].id} option = {canvasOption[i]} />)}
        <div className="sec_1_txt">안녕하세요<p>{secTxt}</p>개발자 성주영입니다</div>
      {/* <div className="sec_1_c_img"></div> */}
    </section>
  )
}
export default Sec1