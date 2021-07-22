import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Head.module.css'
const Head = () => {
  return(
    <div className={styles.header}>
      <Link to='/'><h1>COVID-19 상황</h1></Link>
      <select>
        <option>국내</option>
        <option>국외</option>
      </select>
    </div>
  )
}
export default Head