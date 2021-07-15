import React, { useState } from 'react';
import './intro.css'
const Intro = ()=>{
  const [space, setSpace] = useState('img/space_01.png')
const onclickSpace = (e)=>{
  if(e.target.hasAttribute('data-src')){
    setSpace(e.target.getAttribute('data-src'))
  }
}
  return (
    <>
    <div className="intro_box w_1440">
      <div className="intro_title">
        <h1>경기생활문화센터<br/>공간소개</h1>
        <h4>경기생활문화센터에서 운영하는 공간을 둘러보세요.</h4>
        <div className="more">MORE</div>
      </div>
      <div className="intro_content">
        <div className="i_L"onClick={onclickSpace}>
          <div className="first_floor">
            <div className="intro_row" data-src="img/space_01.png">책놀이터</div>
            <div className="intro_row" data-src="img/space_02.png" >생활 수유실</div>
          </div>
          <div className="second_floor">
            <div className="intro_row" data-src="img/space_03.png">동네부엌</div>
            <div className="intro_row" data-src="img/space_04.png">생생 수유실</div>
            <div className="intro_row" data-src="img/space_05.png">마주침 공간1</div>
            <div className="intro_row" data-src="img/space_06.png">마주침 공간2</div>
          </div>
          <div className="third_floor">
            <div className="intro_row" data-src="img/space_11.png">한뼘전시</div>
            <div className="intro_row" data-src="img/space_12.png">무아지경</div>
            <div className="intro_row" data-src="img/space_13.png">생생살롱1</div>
            <div className="intro_row" data-src="img/space_14.png">생생살롱2</div>
          </div>
        </div>
        <div className="i_R">
          <img src={space} alt="책놀이터" />
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