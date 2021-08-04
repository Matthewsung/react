import { useRef, useState } from 'react'
import styles from './Head.module.css'
const Input = () => {
  const [ searchKey , setSearchKey ] = useState('')
  const onSUbmitInput = (e) => {
    e.preventDefault();
    setSearchKey(inpuRef.current.value)
  }
  const inpuRef = useRef()
  return(
    <>
    <form className={styles.searchForm} onSubmit={onSUbmitInput}>
      <input type="text" placeholder="검색어를 입력하세요" className={styles.searchBar} ref={inpuRef}/>
      <button className={styles.searchBtn}>검색</button>
    </form>
    </>

  )
}
export default Input