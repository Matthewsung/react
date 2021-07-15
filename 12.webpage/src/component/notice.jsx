import React, { useState } from 'react';

import './notice.css'
import Notice_content from './notice_content';
const Notice = () =>{
  
  const [item,setItem]=useState([
    {
      type:'공지',
      topic:'경기생활문화센터 리틀포레 생활문화 동호회 모집 (경기생활문화센터 소속 동호회 대상)',
      detail:'경기생활문화센터 리틀포레에서 끼를 발산할 경기생활문화센터 소속 생활문화 동호회를 찾습니다!',
      date:'2021. 06. 10'
    },
    {
      type:'공지',
      topic:'2021년 예술동호회 연계 활동 지원 2차 공개모집',
      detail:'일상 속에서 누리는 생활문화 활동 지원2021년 예술동호회 연계 활동 지원 2차 공모',
      date:'2021. 06. 03'
    },
    {
      type:'공지',
      topic:'경기생활문화센터 생활문화동호회 온라인 대관 신청 안내',
      detail:'경기생활문화센터 생활문화동호회 온라인 대관 신청 안내  원활한 대관 현황 파악 및 이용을 위해서 그동안 수기로 직접 방문하여 신청하였던 동호회 전용공간인 생상살롱 및 무아지경 공간을 5월 19일부터 온라인 대관신청으로 접수를 받습니다. 생생살롱1~4는 경기생활문화센터 소속 동호회만 대관 신청 가능하며, 무아지경의 경우 청소년 전용 연습실로서의 운영 방침은 유지하되, 다양한 동호회 활동 지원을 위해 평일 시간에만 예약 가능합니다. (오전10시~오후4시까지 이용, 단 방학기간에는 청소년만 대관 신청 가능)',
      date:'2021. 06. 02'
    },
  ])
  

  return (
    <div className="notice">
      <div className="w_1440">
        <h1 className="n_title">새로운 소식</h1>
        <div className="n_content_box">
          {item.map((v,i)=> <Notice_content key={i+v}item={item[i]}/>)}
          
          


        </div>
      </div>
    </div>
  )
}

export default Notice