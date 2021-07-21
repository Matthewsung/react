import { useEffect, useRef, useState } from 'react'
import styles from './Month.module.css'
const Month = ()=>{
  const data = new Date();
  const year = data.getFullYear()
  const month = data.getMonth() + 1;
  const day = data.getDate()
  const totalDay = new Date(year, month+1, 0).getDate() // 이번달 마지막날
  const tr = Array(totalDay).fill('').map((v,i)=>i+1)

  return(
    <table>
      <tbody>
        <tr>
          <td>&lt;</td>
          <td>&lt;</td>
          <td>&gt;</td>
        </tr>
        <tr>
          {tr.map((v,i) => <td key={v+i} className={styles.day}>{i+1}</td>)} 
        </tr>
        
      </tbody>
    </table>
  )
}
export default Month