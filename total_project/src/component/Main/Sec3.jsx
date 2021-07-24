import React from 'react'
const Sec3 = ()=>{
  return(
    <section className="sec_3">
        <div className="w_1440">
            <div className="container_L">
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
                <a href="http://jys89.dothome.co.kr/" target="_blank"><input type="button" value="웹사이트 바로가기" className="c_goToWeb"/></a>
            </div>
        </div>
    </section>
  )
}
export default Sec3