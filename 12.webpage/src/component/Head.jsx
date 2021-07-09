import React from 'react';
import '../index.css'
import './head.css'
const Head = () =>{

  const onMouseEnterMenu = ()=>{
    const sub_menu = document.querySelector('.sub_menu');
    
    sub_menu.classList.add('sub_menu_act')
  }
  const onMouseLeaveMenu = (e)=>{
    const sub_menu = document.querySelector('.sub_menu');
    // console.log(e.target)
    if(e.target.className === 'menu_li'){
      return;
    }else{
      sub_menu.classList.remove('sub_menu_act')
    }
  }
  return (
    <>
      <div className="header">
        <div className="w_1440">
          <div className="logo">
            {/* <a href="#"> */}
              <img src="img/main-logo.svg" alt="로고" />
            {/* </a> */}
          </div>
          <ul className="menu_ul" onMouseEnter={onMouseEnterMenu} onMouseLeave={onMouseLeaveMenu}>
            <li className="menu_li">경기생활문화센터</li>
            <li className="menu_li">경기도생활문화</li>
            <li className="menu_li">기록자료</li>
            <li className="menu_li">웹진</li>
            <li className="menu_li">소통</li>
          </ul>
          <ul className="menu_R">
            <li>로그인</li>
            <li>검색</li>
            <li>일정</li>
          </ul>
        </div>
        <div className="sub_menu" onMouseLeave={onMouseLeaveMenu}>
          <div className="w_1440">
          <ul className="sub_menu_ul">
            <li className="sub_menu_li">
                <div>센터소개</div>
                <div>조직도</div>
                <div>사업안내</div>
                <div>오시는길</div>
              </li>
              <li className="sub_menu_li">
                <div>우리지역 생활문화공간</div>
                <div>생활문화찾기</div>
              </li>
              <li className="sub_menu_li">
                <div>영상채널</div>
                <div>발간도서</div>
              </li>
              <li className="sub_menu_li">
                <div>소개</div>
                <div>웹진</div>
              </li>
              <li className="sub_menu_li">
                <div>공지사항</div>
                <div>자주묻는질문</div>
                <div>1:1문의</div>
              </li>
            </ul>  
          </div>  
        </div>
      </div>
    </>
  )
}

export default Head