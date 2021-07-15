import React, { useEffect, useState } from 'react';
import './sns.css'
import Sns_slide from './sns_slide'
const Sns = ()=>{
  const [snsSlide,setSnsSlide] = useState(["img/sns1.jpg","img/sns2.jpg","img/sns3.jpg","img/sns4.jpg","img/sns5.jpg","img/sns6.jpg","img/sns7.jpg","img/sns8.jpg","img/sns9.jpg",])
  let s_interval;
  let s_check = true;
  useEffect(()=>{
    const s_slide_outer = document.querySelector('.s_slide_outer')
    let s_slide_left = 0;
    const s_slide = document.querySelector('.s_slide')
    s_interval = setInterval(()=>{
      if(s_check){
        s_slide_outer.style.left = s_slide_left + "px"
        if(s_slide_left >= -(Number(s_slide.style.marginRight.split("px")[0])+ s_slide.clientWidth)*(snsSlide.length-4)){
          s_slide_left -= Number(s_slide.style.marginRight.split("px")[0])+ s_slide.clientWidth
        }
        else{
          s_slide_left =0
        }
      }
    },2000)
  },[])
const onMouseEnterBox= ()=>{
  s_check = false
}
const onMouseLeaveBox =()=>{
  s_check = true
}
  return (
    <div className="sns">
        <div className="w_1440">
          <div className="s_title">
            <h1>경기생활문화센터 SNS</h1>
            <div>경기생활문화센터와 친구를 맺고</div>
            <div>다양한 소식을 만나보세요.</div>
          </div>
          <div className="more">MORE</div>
          <div className="s_slide_box" onMouseEnter={onMouseEnterBox} onMouseLeave={onMouseLeaveBox}>
            <div className="s_slide_outer">
              {snsSlide.map((v,i)=><Sns_slide key={i+v} index ={i} backgroud={snsSlide[i]}/>)}
            </div>
          </div>
        </div>
      </div>
  )
}
export default Sns