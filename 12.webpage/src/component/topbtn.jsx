import React, { useEffect, useState } from 'react';
import './topbtn.css'
const TopBtn =()=>{
  // const [scrollY,setScrollY] = useState(0)
  
  const onScrollWindow =()=>{
   
  }
  const onClickBtn=()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"})
  }
  return(
    <div id="top_btn" onClick={onClickBtn} onScroll={onScrollWindow} style={{display:"block"}}>top</div>
  )
}
export default TopBtn