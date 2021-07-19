import { useParams } from 'react-router'
import Word from './Word'
import styles from './Day.module.css'
import { useEffect, useState } from 'react'
import Fetch from '../hooks/Fetch'
const Day = ()=>{
  const day = useParams().day
  const word = Fetch('http://localhost:8000/words')
  const wordList = word.filter((v)=>v.day === Number(day))

  
  return(
    <>
      <h1 className={styles.title}>Day {day}</h1>
      <table>
        <tbody>
          <tr>
            <td>확인</td>
            <td>영어</td>
            <td>한국어</td>
            <td></td>
          </tr>
          {wordList.map((v,i)=>
            <Word key={v.id} v={v}/>
          )}
        </tbody>
      </table>
    </>
  )
}

export default Day
