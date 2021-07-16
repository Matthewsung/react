import React from 'react';
import '../index.css'
import './footer.css'
// import ''


const Footer = () =>{
  const onClickF_Tap =()=>{
    const f_tap_div = document.querySelectorAll('.f_tap_div')
    Array(f_tap_div.length).fill('block').map((v,i)=> f_tap_div[i].style.display = v)
  }
  const onMouseLeaveF_tap =()=>{
    const f_tap_div = document.querySelectorAll('.f_tap_div')
    Array(f_tap_div.length).fill('none').map((v,i)=> f_tap_div[i].style.display = v)
  }
  return (
    <>
     <div className="footer">
        <div className="f_top">
          <ul className="f_top_L">
            <li>개인정보 처리방침</li>
            <li>이용약관</li>
            <li>행정정보공개</li>
            <li>클린신고센터</li>
          </ul>
          <ul className="f_top_R">
            <li className="f_icon">
              <img src="/img/facebook_b.png" alt="페이스북" />
            </li>
            <li className="f_icon">
              <img src="/img/facebook_b.png" alt="페이스북" />
            </li>
            <li className="f_icon">
              <img src="/img/facebook_b.png" alt="페이스북" />
            </li>
            <li className="f_icon">
              <img src="/img/facebook_b.png" alt="페이스북" />
            </li>
            <li className="f_tap" onClick={onClickF_Tap} onMouseLeave={onMouseLeaveF_tap}>
                <div >
                  <div className="f_tap_div" style={{display:"none"}}>e상상캠퍼스</div>
                  <div className="f_tap_div" style={{display:"none"}}>경기상상캠퍼스</div>
                  <div className="f_tap_div" style={{display:"none"}}>경기문화재단</div>
                  <div style={{display:"block"}}>패밀리 사이트</div>
                </div>
            </li>
          </ul>
        </div>
        <div className="f_bot">
          <div className="f_bot_L">
            <img src="img/main-logo-gray.svg" alt="" />
          </div>
          <div className="f_bot_R">
            <p>경기문화재단 경기생활문화센터 (16614) 경기도 수원시 권선구 서둔로 166 생생1990 / 대표전화 031-231-0540</p>
            <p>사업자번호 135-82-06932 / 대표이사 강헌</p>
            <p>COPYRIGHT©GGCF. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer