
import { useState } from 'react'
import styles from './Day.module.css'

const Word =({v})=>{
  const [word, setWord] = useState(v.id)
  const [isShow, setIsShow] = useState(false)
  const [isDone, setIsDone] = useState(v.isDone)
  const toggleShow=()=>{
    setIsShow(!isShow)
  }
  const toggleDone =()=>{
    // setIsDone(!isDone)
    fetch(`http://localhost:8000/words/${v.id}`,{
      method:"PUT",
      headers:{
        "Content-Type": "application/json",
      },
      body:JSON.stringify({
        ...v,
        isDone:!isDone
      })
    })
    .then(res => res.ok?setIsDone(!isDone):'')
  }
  const Del = ()=>{
    if(window.confirm('삭제하시겠습니까')){
      fetch(`http://localhost:8000/words/${v.id}`,{
        method:'DELETE'
      })
      .then(res => res.ok?v.id = 0:'')
    }
    
  }
  if(word === 0 ){
    return null
  }
  return(
    <tr className={isDone ? styles.memorized:''} >
      <td><input type="checkbox" checked={isDone} onChange={toggleDone}/></td>
      <td>{v.eng}</td>
      <td>{isShow && v.kor}</td>
      <td className={styles.d_btn}>
        <button onClick={toggleShow}>뜻 보기</button>  
        <button onClick={Del}>삭제</button>  
      </td>
    </tr> 
  )
}
export default Word