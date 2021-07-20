import React, { useEffect, useState } from 'react';
import './topbtn.css'
const TopBtn =(e)=>{
  // const [scrollY,setScrollY] = useState(0)
  const ShowBtn =()=>{
    const scrollY = window.scrollY
    const banner_box = document.querySelector('.banner_box').getBoundingClientRect().height
    const top_btn = document.querySelector('#top_btn')
    // scrollY >= banner_box ? top_btn.style.display="blcok" : top_btn.style.display="blcok" 
    scrollY >= banner_box ? top_btn.style.display="blcok" : top_btn.style.display="none"
  }
  
  
  useEffect(()=>{
    window.addEventListener('scroll',ShowBtn)
  },[])
  
  
  const onClickBtn=()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"})
  }


  return(
    <div id="top_btn" onClick={onClickBtn} >top</div>
  )
}
export default TopBtn