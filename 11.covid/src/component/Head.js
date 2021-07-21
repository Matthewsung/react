import React from 'react'
import styles from './Head.module.css'
const Head = () => {
  return(
    <div className={styles.header}>
      <h1>COVID-19 상황</h1>
      <select>
        <option>국내</option>
        <option>국외</option>
      </select>
    </div>
  )
}
export default Head