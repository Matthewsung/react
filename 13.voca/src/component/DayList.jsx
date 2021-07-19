import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import styles from './Head.module.css'
import Fetch from '../hooks/Fetch'
const DayList = () =>{
  const day = Fetch('http://localhost:8000/day')
  return(
    <ul className={styles.menu_ul}>
        {day.map((v,i)=> 
          <li key={v.id} className={styles.menu_li}>
            <Link to={`/day/${v.day}`}>Day {v.day}</Link>
          </li>
        )}
      </ul>
  )
}
export default DayList