import React,{ useEffect, useState } from 'react';
import './banner.css'
const Banner = () =>{
  const [bGap,setBGap] = useState(1)
  const [bIndex,setBIndex] = useState(0)
  useEffect ( () => {
    const banner = document.querySelectorAll('.banner')
    // console.log(banner[bIndex])
    // banner[bIndex].style.opacity = bGap;
    
    // const interval = setInterval(()=>{        
      //   setBGap( (prevState)=> {
        //     return bGap >=0 ? prevState - 0.1: clearInterval(interval)
        //   })
        //   return (
          //     clearInterval(interval),
          //     setBIndex((prevState)=> prevState >= 2 ? prevState = 0 : prevState + 1 )
          //   ) 
          // },500)
    const interval = setInterval(()=>{
      banner[bIndex].style.opacity = bGap;//1
      
      setBGap((prevState) => {
        if(prevState > 0){
          return prevState - 0.5
        }
        else{
          return 1
        }
      })
      
      if(bGap <= 0){
        setBIndex( (prevState) => prevState + 1)
      }
      else{
        return
      }
      if(bIndex >= 2){
        setBIndex(0);
        
      }
      else{
        console.log("bIndex 안바뀐다")
      }
      // bGap <= 0 ? setBIndex( (prevState) => prevState + 1) : console.log("bGap 안바뀐다")
      // bIndex >= 2 ? setBIndex(0):console.log("bIndex 안바뀐다")
      
      console.log(bGap,bIndex)
      // banner[bIndex+1].style.opacity = 0.5

      
      return clearInterval(interval)
    },1000)
    
  }, [bGap])
    






  return (
    <>
      <div className="banner_box">
        <div className="banner" id="banner_1"style={{opacity:"1"}}>
          <div className="b_R">
            <div className="b_text">
              <p>경기도 생활문화의 중심</p>
              <p>일상에 문화를<br/> 물들이다</p>
            </div>
          </div>
          <div className="b_img">
            <img src="./img/banner_2.gif" alt="" />
          </div>
        </div>
        <div className="banner" style={{opacity:"1"}}>
          <div className="b_R">
            <div className="b_text">
              <p>경기도민을 위한 생활문화의 허브</p>
              <p>문화의 주체자로 <br/>성장하다</p>
            </div>
          </div>
          <div className="b_img">
            <img src="./img/banner_3.gif" alt="" />
          </div>
        </div>
        <div className="banner" style={{opacity:"1"}}>
          <div className="b_R">
            <div className="b_text">
              <p>지역주민 누구나 자유롭게 이용할 수 있는<br/> 생활문화공간</p>
              <p>경기도민과 만나다</p>
            </div>
          </div>
          <div className="b_img">
            <img src="./img/banner_1.gif" alt="" />
          </div>
        </div>
      
      </div>
    </>
  )
}

export default Banner