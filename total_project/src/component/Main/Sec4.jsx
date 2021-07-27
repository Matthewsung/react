import React,{useRef,useEffect} from 'react'
import { Link } from 'react-router-dom';
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
  const Sec4Ref = useRef()
  const ShowProject = ()=>{
    const sec_4 = document.querySelector('.sec_4')
    const sec_4Top = sec_4.getBoundingClientRect().top;
    const sec_4Height = sec_4.getBoundingClientRect().height;
    //이미지 나오는 animation
    if(sec_4Top - (sec_4Height * 0.3) <= 0){
        Sec4Ref.current.style.transform = "scale(1)"
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',ShowProject)
    const tablet = document.querySelector('.sec_4 .tablet')
    const phone = document.querySelector('.sec_4 .phone')
    tablet.style.background = " url(../img/drg_main_768.png) no-repeat center 23px / cover"
    phone.style.background = "url(../img/drg_main_420.png) no-repeat center 5px / cover"
  },[])
  return(
    <section className="sec_4" >
         {Array(canvasOption.length).fill().map( (v,i) => <CanvasCircle key = {canvasOption[i].id} option = {canvasOption[i]} />)}
        <div className="w_1440">
            <div className="container_L" ref={Sec4Ref}>
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
                <div className="c_goToWeb" >
                  <Link to={{pathname:"http://jys2.dothome.co.kr"}} target="_blank">웹사이트 바로가기</Link>
                  </div>
                <div className="c_goToWeb">
                  <Link to={{pathname:"https://github.com/Matthewsung/baraboda"}} target="_blank">Github Code 보기</Link>
                </div>
            </div>
        </div>
    </section>
  )
}
export default Sec4