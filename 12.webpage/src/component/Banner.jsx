import React,{ useEffect,  } from 'react';
import './banner.css'
import '../index.css'
const Banner = () =>{
  

  useEffect ( () => {
    const banner = document.querySelectorAll('.banner')
    const indi = document.querySelectorAll('.indi')
    let b_index = 0;
    let b_length = banner.length;
    let b_gap = 0;
    let b_confirm = true
     setInterval(()=>{
      if(b_confirm){
        banner[b_index % b_length].style.opacity = 1 - b_gap;
        banner[(b_index + 1) % b_length].style.opacity = b_gap;
        indi.forEach((v)=>v.firstChild.classList.remove('indi_line_act'))
        indi[b_index % b_length].firstChild.classList.add('indi_line_act')
        b_gap += 0.1;
        if(b_gap>=1){
          b_gap=0;
          b_index +=1;
          b_confirm= false
          setTimeout(()=>{b_confirm=true},2000)
        }
      }
    },100)
      // const interval = setInterval(()=>{
      //   console.log("///////////////인터벌 시작입니다////////")
      //   banner[bIndex].style.opacity = bGap;
      //   setBGap((prevState) => prevState > 0 ? prevState - 0.1 : 1)
      //   bGap <= 0 ? setBIndex((prevState)=>(prevState +1)%banner.length) : console.log()
      //   return clearInterval(interval), console.log("///////////////인터벌 끝입니다////////")
      // },1000)
      
  }, [])
  
  return (
    <>
    <div className="w_1440">
      <div className="banner_box" >
        <div className="banner" id="banner_1"style={{opacity:"1"}}>
          <div className="b_R">
            <div className="b_text">
              <p>경기도 생활문화의 중심</p>
              <p>일상에 문화를<br/> 물들이다</p>
            </div>
          </div>
          <div className="b_img">
            <img src="./img/banner_2.gif" alt="" />
          </div>
        </div>
        <div className="banner" style={{opacity:"0"}}>
          <div className="b_R">
            <div className="b_text">
              <p>경기도민을 위한 생활문화의 허브</p>
              <p>문화의 주체자로 <br/>성장하다</p>
            </div>
          </div>
          <div className="b_img">
            <img src="./img/banner_3.gif" alt="" />
          </div>
        </div>
        <div className="banner" style={{opacity:"0"}}>
          <div className="b_R">
            <div className="b_text">
              <p>지역주민 누구나 자유롭게 이용할 수 있는<br/> 생활문화공간</p>
              <p>경기도민과 만나다</p>
            </div>
          </div>
          <div className="b_img">
            <img src="./img/banner_1.gif" alt="" />
          </div>
        </div>
        <div className="indi_box">
          <div className="indi">
            <p className="indi_line"></p><h1>1</h1>
          </div>
          <div className="indi">
            <p className="indi_line"></p><h1>2</h1>
          </div>
          <div className="indi">
            <p className="indi_line"></p><h1>3</h1>
          </div>
        </div>
      </div>
      <ul className="b_menu_ul">
        <li className="b_menu_li">우리지역 생활문화공간<div className="b_icon">→</div></li>
        <li className="b_menu_li">생활문화공간 찾기<div className="b_icon">→</div></li>
        <li className="b_menu_li">경기상상캠퍼스<div className="b_icon">→</div></li>
        <li className="b_menu_li">온라인 문의<div className="b_icon">→</div></li>
      </ul>
    </div>
    </>
  )
}

export default Banner