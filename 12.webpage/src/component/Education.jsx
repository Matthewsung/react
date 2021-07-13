import React, { useState, useEffect ,  } from 'react';
import './education.css'
import Program from './program'
const Education = () =>{
  const DATA = new Date;
  const [year, setYear]=useState(DATA.getFullYear())
  const [month, setMonth]=useState(DATA.getMonth()+1)
  const [totalDay,setTotalDay] = useState(Array(new Date(DATA.getFullYear() , month , 0 ).getDate()).fill().map((v,i)=>i+1))
  const [day, setDay] = useState(DATA.getDate())
  const today = document.getElementsByClassName('today')
  const [program, setProgram] =useState(Array(6).fill(''))

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
  console.log(program)
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
          {program.map((v,i)=> <Program />)}
        </div>
      </div>
    </div>

    </>
  )
}

export default Education