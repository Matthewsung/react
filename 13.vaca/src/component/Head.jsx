import { Link } from 'react-router-dom'
import styles from './Head.module.css'
const Head = ()=>{
  

  return(
    <>
      <Link to="/">
        <h1 className={styles.title}>VOCA</h1>
      </Link>
      <div className={styles.h_btn_box}>
        <Link to="/create-words">
          <button className={styles.h_btn}>단어 추가</button>
        </Link>
        <button className={styles.h_btn}>Day 추가</button>
      </div>
    </>
  )
}
export default Head