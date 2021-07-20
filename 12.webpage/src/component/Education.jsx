import React, { useState, useEffect ,  } from 'react';
import './education.css'
import Program from './program'
const data = [
  {
    id:1,
    loc:'하남',
    title:'나룰 수채화 드로잉',
    detail:'하남문화예술회관 체험실',
    date:'2021.01.31 ~ 2021.12.31',
    url:'img/slide1.png'
  },
  {
    id:2,
    loc:'하남',
    title:'기타사랑',
    detail:'하남문화예술회관 강의실',
    date:'2021.01.01 ~ 2021.12.31',
    url:'img/slide2.png'
  },
  {
    id:3,
    loc:'하남',
    title:'미사누그 드로잉',
    detail:'하남문화예술회관 체험실',
    date:'2021.01.31 ~ 2021.12.31',
    url:'img/slide3.png'
  },
  {
    id:4,
    loc:'하남',
    title:'우쿨LOVE',
    detail:'하남문화예술회관 연습실',
    date:'2021.01.01 ~ 2021.12.31',
    url:'img/slide4.png'
  },
  {
    id:5,
    loc:'하남',
    title:'행복한 합창단',
    detail:'하남문화예술회관 연습실',
    date:'2021.01.01 ~ 2021.12.31',
    url:'img/slide5.png'
  },
  {
    id:6,
    loc:'하남',
    title:'벨칸토성악 동호회',
    detail:'하남문화예술회관 연습실',
    date:'2021.01.31 ~ 2021.12.31',
    url:'img/slide6.png'
  },
  
]
const Education = () =>{
  const DATA = new Date;
  const [year, setYear]=useState(DATA.getFullYear())
  const [month, setMonth]=useState(DATA.getMonth()+1)
  const [totalDay,setTotalDay] = useState(Array(new Date(DATA.getFullYear() , month , 0 ).getDate()).fill().map((v,i)=>i+1))
  const [day, setDay] = useState(DATA.getDate())
  const today = document.getElementsByClassName('today')
  let program_arr = Array(data.length*3).fill('')
  let p_chk = true
useEffect ( ()=>{
  const m_date = document.querySelector('.m_date')
  const program = document.getElementsByClassName('program')
  const p_width = program[0].clientWidth + parseInt(program[0].style.marginRight)
  today[day-1].classList.add('today_act')
  
  const arr = Array(data.length*3).fill(-p_width*data.length).map((v,i)=> v + p_width*i +"px")

  arr.map((v,i)=> program[i].style.left=v)
  let p_interval;
  p_interval = setInterval(()=>{
    if(p_chk){
      Array(data.length*3).fill('').map((v,i)=> parseInt(program[i].style.left) === -p_width*data.length ? program[i].style.transition="none" : program[i].style.transition="all 1s") 
      arr.map((v,i)=> program[(i+1)%program.length].style.left=v)
      arr.unshift(arr[program.length-1])
      arr.pop(arr[program.length-1])    
    }
  },3000 )
},[day])

// 클릭하면 달이 넘어가는 함수
  const onClickCalendar = (e)=>{
    
    if(e.target.innerText === "-"){
      setMonth((prevState)=>prevState == DATA.getMonth()+1-1?prevState:prevState - 1)
      setTotalDay(Array(new Date(DATA.getFullYear() , month-1 , 0 ).getDate()).fill().map((v,i)=>i+1))
    }
    else if(e.target.innerText === "+"){
      setMonth((prevState)=>prevState == DATA.getMonth()+1+1?prevState:prevState + 1)
      setTotalDay(Array(new Date(DATA.getFullYear() , month-1 , 0 ).getDate()).fill().map((v,i)=>i+1))
    }
    if(DATA.getMonth()+1 == month){
      
      today[day-1].classList.add('today_act')
    }
    else{
      today[day-1].classList.remove('today_act')
    }
  }
const onMouseEnterPbox = (e)=>{
  p_chk = false
  e.target.closest('.program').querySelector('.p_text').style.display="block"
  console.log()
}
const onMouseLeavePbox = (e)=>{
  e.target.closest('.program').querySelector('.p_text').style.display="none"
  p_chk = true
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
        <div className="program_box" >
          {program_arr.map((v,i)=> <Program key={i+v} index={i} data={data[i % data.length]} onMouseEnter={onMouseEnterPbox} onMouseLeave={onMouseLeavePbox} />)}
        </div>
      </div>
    </div>

    </>
  )
}

export default Education