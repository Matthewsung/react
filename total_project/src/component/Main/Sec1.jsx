import React from 'react'
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
const Sec1 = ()=>{
  return(
    <section className="sec_1">
      <div className="sec_1_L">
          <div className="sec_1_txt1">
              텍스트 자리 입니다
          </div>
      </div>
      <div className="sec_1_R">
        {Array(canvasOption.length).fill().map( (v,i) => <CanvasCircle key = {canvasOption[i].id} option = {canvasOption[i]} />)}
          <div className="sec_1_txt2">
              텍스트 자리 입니다
          </div>
      </div>
      <div className="sec_1_c_img"></div>
    </section>
  )
}
export default Sec1