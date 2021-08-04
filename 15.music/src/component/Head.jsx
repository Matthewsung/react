import { useState,useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './Head.module.css'
const Head = ()=>{
  const logo = 'GOOGLE'
  const color =['#e53935','#d81b60','#8e24aa','#5e35b1','#3849aa','#1e88e5','#039be5','#00acc1','#00897b','#43a047','#7cb342','#c0ca33','#fdd835','#ffb300','#fb8c00','#f4511e','#6d4c41','#757575','#546e7a']
  console.log(color[Math.floor(Math.random()*color.length)]) // 랜덤으로 색 선택
 
  return(
    <div className={styles.header}>
      <div className={styles.total_title}>
        {logo.split('').map((v,i) => <span key={i} style={{color:color[Math.floor(Math.random()*color.length)]}}>{v}</span>)}
      </div>
    </div>

  )
}
export default Head