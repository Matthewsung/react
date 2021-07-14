import React from 'react';
import './intro.css'
const Intro = ()=>{
const onMouseEnterMore = ()=>{
  
}
const onMouseLeaverMore = ()=>{
  
}
  return (
    <>
    <div className="intro_box w_1440">
      <div className="intro_title">
        <h1>경기생활문화센터<br/>공간소개</h1>
        <h4>경기생활문화센터에서 운영하는 공간을 둘러보세요.</h4>
        <div className="i_more" onMouseEnter={onMouseEnterMore} onMouseLeave={onMouseLeaverMore}>MORE</div>
      </div>
      <div className="intro_content">
        <div className="i_L">
          <div className="first_floor">
            <div className="intro_row">책놀이터</div>
            <div className="intro_row">생활 수유실</div>
          </div>
          <div className="second_floor">
            <div className="intro_row">동네부엌</div>
            <div className="intro_row">생생 수유실</div>
            <div className="intro_row">마주침 공간1</div>
            <div className="intro_row">마주침 공간2</div>
          </div>
          <div className="third_floor">
            <div className="intro_row">한뼘전시</div>
            <div className="intro_row">무아지경</div>
            <div className="intro_row">생생살롱1</div>
            <div className="intro_row">생생살롱2</div>
          </div>
        </div>
        <div className="i_R">
          <img src="img/space_01.png" alt="책놀이터" />
        </div>
      </div>
    </div>
    <div className="search_box">
      <div className="s_L">
        <h1>우리지역</h1> 
        <h1>생활문화공간을 찾아보세요.</h1>
        <div>내가 사는 지역 생활문화공간 바로 찾기</div>
      </div>
      <div className="s_R">
        <img src="img/our-center-img.svg" alt="" />
        <div className="i_more">MORE</div>
      </div>
    </div>
  </>
  )
}
export default Intro