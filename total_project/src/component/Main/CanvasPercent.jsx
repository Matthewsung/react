import React, { useEffect, useRef } from 'react'

const CanvasPercent = ({percentOption})=>{
  let p_index = 0;
  let p_start ;
  const FillCancasRef = useRef()
  
  
  const FillCanvas = () => {
    const canvas = FillCancasRef.current;
    const context = canvas.getContext('2d')
    const percent = canvas.width * percentOption.score * 0.01
    context.fillStyle = "#053f73"
    context.fillRect(0,0,p_index,40)
    context.fill()
    p_index += 5
    p_start = requestAnimationFrame(FillCanvas)
    if(p_index >= percent){cancelAnimationFrame(p_start)}
  }
  useEffect(()=>{
    FillCanvas()
  },[])
  
  
  
  return(
    <div className="work_item">
      <div className="item_img">
          <img src={percentOption.url} alt={percentOption.alt}/>
      </div>
      <div className="item_score_box">
          <canvas id={`item_score_${percentOption.id}`} width="300px" height="40px" ref={FillCancasRef}></canvas>
          <p className="real_score">{percentOption.score}%</p>
      </div>
    </div>
  )
}
export default CanvasPercent