import React, { useState, useEffect ,  } from 'react';
import './education.css'

const Education = () =>{
  const DATA = new Date;
  const [year, setYear]=useState(DATA.getFullYear())
  const [month, setMonth]=useState(DATA.getMonth()+1)
  const [totalDay,setTotalDay] = useState(Array(new Date(DATA.getFullYear() , month , 0 ).getDate()).fill().map((v,i)=>i+1))
  const [day, setDay] = useState(DATA.getDate())
  const today = document.getElementsByClassName('today')

useEffect ( ()=>{
  const m_date = document.querySelector('.m_date')
  today[day-1].classList.add('today_act')
},[day])

// 클릭하면 달이 넘어가는 함수
  const onClickCalendar = (e)=>{
    if(e.target.innerText === "-"){
      setMonth((prevState)=>prevState - 1)
      setTotalDay(Array(new Date(DATA.getFullYear() , month-1 , 0 ).getDate()).fill().map((v,i)=>i+1))
      
    }
    else if(e.target.innerText === "+"){
      setMonth((prevState)=>prevState + 1)
      setTotalDay(Array(new Date(DATA.getFullYear() , month-1 , 0 ).getDate()).fill().map((v,i)=>i+1))
    }
    today[day-1].classList.remove('today_act')
  }
  return (
    <>
    <div className="education">
      <div className="w_1440">
        <div className="e_title">
          <h1>이달의 교육</h1>
          <h4>이달에 운영되는 다양한 교육을 만나보세요.</h4>
          <div className="detail">더보기 +</div>
        </div>
        <div className="calendar">
          <div className="cal_month">
            <div className="m_L" value="-" onClick={onClickCalendar}>-</div>
            <div className="m_date">
              <h1>{month}</h1>
              <h3>{year}</h3>
            </div>
            <div className="m_R"value="+" onClick={onClickCalendar}>+</div>
          </div>
          <div className="cal_day">
            {totalDay.map((v,i)=> <div key={i+1}className="today">{i+1}</div>)}
          </div>
        </div>
        <div className="program_box">
          <div className="program">
            <div className="p_img">
              <img src="img/slide1.png" alt="슬라이드1" />
            </div>
            <div className="p_text">
              
              <div><p>#교육</p> 2021.01.31 ~ 2021.12.31</div>
              <div>미사누그 드로잉</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default Education