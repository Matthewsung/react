import styles from './Day.module.css'
import Fetch from '../hooks/Fetch'
import { useHistory } from 'react-router-dom'
const CreateDay = ()=>{
  const day = Fetch("http://localhost:8000/day")
  const history = useHistory()
  const onSubmitForm = (e)=>{

    e.preventDefault()
    fetch("http://localhost:8000/day",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({
        day:day.length+1
      })
    })
    .then(res => {
      if(res.ok){
        alert("생성이 안료되었습니다.");
        history.push("/")
      }
    })
  }
  return(
    <form onSubmit={onSubmitForm}>
      <button>Day 추가하기</button>
    </form>
  )
}
export default CreateDay