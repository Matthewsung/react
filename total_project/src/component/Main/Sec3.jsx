import React, { useEffect, useRef } from 'react'
const Sec3 = ()=>{
  const ShowProject = ()=>{
    const sec_3 = document.querySelector('.sec_3')
    const sec_3Top = sec_3.getBoundingClientRect().top;
    const sec_3Height = sec_3.getBoundingClientRect().height;
    //이미지 나오는 animation
    if(sec_3Top - (sec_3Height * 0.3) <= 0){
        Sec3Ref.current.style.transform = "scale(1)"
    }
  }
  useEffect(()=>{
    window.addEventListener('scroll',ShowProject)
    const tablet = document.querySelector('.sec_3 .tablet')
    const phone = document.querySelector('.sec_3 .phone')
    tablet.style.background = "url(../img/baraboda_main_768.png) no-repeat center 23px / cover"
    phone.style.background = "url(../img/baraboda_main.png) no-repeat center 5px / cover"
  },[])

  const Sec3Ref = useRef()
  return(
    <section className="sec_3" >
      <div className="w_1440">
        <div className="container_L" ref={Sec3Ref}>
          <div className="desk">
                    <img src="img/r_desk.png" alt="r_desk" />
                    <div className="inner_img">
                        <img src="img/baraboda_main.png" alt=""/>
                    </div>
                </div>
                <div className="tablet">
                    <img src="img/r_k.png" alt=""/>
                </div>
                <div className="phone">
                    <img src="img/r_phone.png" alt=""/>
                </div>
            </div>
            <div className="container_R">
                <div className="c_content"><p className="c_title">TYPE</p> 반응형</div>
                <div className="c_content"><p className="c_title">참여도</p> 100%</div>
                <div className="c_content"><p className="c_title">기간</p> 6일</div>
                <div className="c_content"><p className="c_title">tool</p> HTML / CSS / Javascript / Jquery</div>
                <input type="button" value="웹사이트 바로가기" className="c_goToWeb"/>
                <input type="button" value="Github Code 보기" className="c_goToWeb"/>
            </div>
        </div>
    </section>
  )
}
export default Sec3