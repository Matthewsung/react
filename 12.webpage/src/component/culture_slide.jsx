import React, { useEffect } from 'react'

const Culture_slide = ({url,})=>{

  const Culture_slide_item=({url,})=>{
    useEffect(()=>{
      const slide_img = document.querySelectorAll('.slide_img')
      slide_img[url.id-1 ].style.background = `url(${url.url}) no-repeat center / cover`
      console.log(slide_img.length, url.id-1 ,)
    },[])
    return(
      <div className="c_slide" style={{left:"100%"}}>
        <div className="slide_img">
          <div className="side_txt">
            <div>{url.side1}</div>
            <div>{url.side2}</div>
          </div>
        </div>
        <div className="slide_txt">
          <div className="c_slide_title"><span>진행중</span>{url.title}</div>
          <div className="c_loc">{url.loc}</div>
          <div className="c_term">{url.date}</div>
        </div>
      </div>
    )
  }
  return(
    <>
      {url.map((v,i)=> <Culture_slide_item key={v.id} url={url[i]}/>)}
    </>
  )
}
export default Culture_slide