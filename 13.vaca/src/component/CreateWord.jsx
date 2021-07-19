import { useRef } from 'react'
import styles from './Day.module.css'
import Fetch from '../hooks/Fetch'
import { useHistory } from 'react-router'
const CreateWord = ()=>{
  const day = Fetch("http://localhost:8000/day")
  console.log(day)
  const history = useHistory()
  const onSubmitForm = (e)=>{
    e.preventDefault()
    fetch("http://localhost:8000/words/",{
      method:"POST",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        day:Number(refDay.current.value),
        eng:refEng.current.value,
        kor:refKor.current.value,
        isDone: false,
      })
    })
    .then(res => {
      if(res.ok){
        alert("생성이 완료되었습니다.");
        history.push(`day/${refDay.current.value}`)
      }
    })
  }
  const refEng = useRef()
  const refKor = useRef()
  const refDay = useRef()
  return(
    <form onSubmit={onSubmitForm}>
      <label htmlFor="eng" className={styles.item} >eng : <input id="eng" type="text" ref={refEng} />
      </label>
      <label htmlFor="kor" className={styles.item}>kor : <input id="kor" type="text" ref={refKor} />
      </label>
      <select className={styles.select} ref={refDay}>
        {day.map((v,i)=> <option key={v.id} value={v.day}>{v.day}</option>)}
        
      </select>
      <button>생성하기</button>
    </form>
  )
}
export default CreateWord