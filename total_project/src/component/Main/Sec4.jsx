import React from 'react'
import CanvasCircle from './CanvasCircle';
const canvasOption=[
    {
      id:1,
      divId : "sec_4_cir1",
      width:600,
      end : 2*Math.PI,
      color: "#bed8ef"
    },
    {
      id:2,
      divId : "sec_4_cir2",
      width:200,
      end : 2*Math.PI,
      color: "#053f73"
    },
    {
      id:3,
      divId : "sec_4_cir3",
      width:70,
      end : 2*Math.PI,
      color: "#bed8ef"
    },
  ]
const Sec4 = ()=>{
  return(
    <section className="sec_4">
         {Array(canvasOption.length).fill().map( (v,i) => <CanvasCircle key = {canvasOption[i].id} option = {canvasOption[i]} />)}
        <div className="w_1440">
            <div className="container_L">
                <div className="desk">
                    <img src="img/r_desk.png" alt=""/>
                    <div className="inner_img">
                        <img src="img/drg_main.png" alt=""/>
                    </div>
                </div>
                <div className="tablet">
                    <img src="img/r_k.png" alt=""/>
                </div>
                <div className="phone">
                    <img src="img/r_phone.png" alt=""/>
                </div>
            </div>
            <div className="container_R">
                <div className="c_content"><p className="c_title">TYPE</p> 반응형</div>
                <div className="c_content"><p className="c_title">참여도</p> 100%</div>
                <div className="c_content"><p className="c_title">기간</p> 5일</div>
                <div className="c_content"><p className="c_title">tool</p> HTML / CSS / Javascript / Jquery</div>
                <a href="http://jys2.dothome.co.kr/" target="_blank"><input type="button" value="웹사이트 바로가기" className="c_goToWeb"/></a>
            </div>
        </div>
    </section>
  )
}
export default Sec4