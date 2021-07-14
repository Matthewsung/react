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
  const [program_arr, setProgram] =useState(Array(6).fill(''))

useEffect ( ()=>{
  const m_date = document.querySelector('.m_date')
  const program = document.getElementsByClassName('program')
  const p_width = program[0].clientWidth
  today[day-1].classList.add('today_act')
  const arr = [(p_width+20)*0 + "px", (p_width+20)*1 + "px", (p_width+20)*2 + "px", (p_width+20)*3 + "px", (p_width+20)*4 + "px",(p_width+20)*5 + "px"]
  arr.map((v,i)=> program[i].style.left=v)


  setInterval(()=>{
    arr.map((v,i)=> program[(i+1)%program.length].style.left=v)
    arr.unshift(arr[program.length-1])
    arr.pop(arr[program.length-1])    
  },3000)
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
          {program_arr.map((v,i)=> <Program key={i+v}/>)}
        </div>
      </div>
    </div>

    </>
  )
}

export default Education