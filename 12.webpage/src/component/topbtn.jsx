import React, { useEffect, useRef, useState } from 'react';
import './topbtn.css'
const TopBtn =(e)=>{
  const ShowBtn =()=>{
    const banner_box = document.querySelector('.banner_box').getBoundingClientRect().height
    window.scrollY >= banner_box ? refTopBtn.current.style.display = 'block' : refTopBtn.current.style.display = 'none '
  }
  useEffect(()=>{
    window.addEventListener('scroll',ShowBtn)
    // return window.removeEventListener('scroll',ShowBtn)
  },[])
  
  
  const onClickBtn=()=>{
    window.scrollTo({top:0,left:0, behavior:"smooth"})
  }
  const refTopBtn = useRef()

  return(
    <div id="top_btn" onClick={onClickBtn} ref={refTopBtn} >top</div>
  )
}
export default TopBtn