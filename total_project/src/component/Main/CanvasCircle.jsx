import React,{ useRef,useEffect,useState} from 'react'
const CanvasCircle =({option,})=>{
  const canvasRef = useRef(null);
  const contextRef = useRef(null);
  const [ctx, setCtx] = useState()

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d')
    canvas.width = option.width
    canvas.height = option.width
    context.fillStyle = option.color;
    context.arc(option.width/2,option.width/2,option.width/2,0,option.end,true)
    context.fill()
  }, [])
  return(
    <>
      <canvas id={option.divId} ref={canvasRef}/>
    </>
  )
}
export default  CanvasCircle