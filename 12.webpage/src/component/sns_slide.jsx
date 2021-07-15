import React, { useEffect } from 'react'
const Sns_slide =({backgroud,index})=>{
  useEffect(()=>{
    document.getElementsByClassName('s_slide')[index].style.background = backgroud = `url(${backgroud}) no-repeat center / cover`;
  },[])
  return(
    <div className="s_slide" style={{marginRight:"20px"}}></div>
  )
}
export default Sns_slide