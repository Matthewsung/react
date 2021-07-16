import React, { useEffect, useState } from 'react';
import './topbtn.css'
const TopBtn =()=>{
  const [scrollY,setScrollY] = useState(0)
  // useEffect(()=>{
  //   const top_btn = document.querySelector('#top_btn')

    
  //   window.pageYOffset >= 100?top_btn.style.display = "block":top_btn.style.display = "none"
  // },[scrollY])
  const onScrollWindow =()=>{
    console.log(11)
    // setScrollY(window.pageYOffset)
    
    // console.log(scrollY)
  }
  const onClickBtn=()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"})
  }
  return(
    <div id="top_btn" onClick={onClickBtn} onScroll={onScrollWindow} style={{display:"block"}}>top</div>
  )
}
export default TopBtn