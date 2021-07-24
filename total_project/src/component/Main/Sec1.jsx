import React from 'react'
const Sec1 = ()=>{
  return(
    <section className="sec_1">
      <div className="sec_1_L">
          <canvas id="sec_1_cir1"></canvas>
          <div className="sec_1_txt1">
              텍스트 자리 입니다
          </div>
      </div>
      <div className="sec_1_R">
          <canvas width="400px" height="400px" id="sec_1_cir2"></canvas>
          <canvas width="200px" height="200px" id="sec_1_cir3"></canvas>
          <canvas width="100px" height="100px" id="sec_1_cir4"></canvas>
          <div className="sec_1_txt2">
              텍스트 자리 입니다
          </div>
      </div>
      <div className="sec_1_c_img"></div>
    </section>
  )
}
export default Sec1