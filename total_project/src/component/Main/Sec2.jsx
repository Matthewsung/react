import React from 'react'
import CanvasCircle from './CanvasCircle'
const canvasOption=[
    {
      id:1,
      divId : "sec_2_cir1",
      width:50,
      end : 2*Math.PI,
      color: "#bed8ef"
    },
    {
      id:2,
      divId : "sec_2_cir2",
      width:150,
      end : 2*Math.PI,
      color: "#053f73"
    },
    {
      id:3,
      divId : "sec_2_cir3",
      width:700,
      end : 2*Math.PI,
      color: "#bed8ef"
    },
  ]
const Sec2 = ()=>{
  return(
    <section className="sec_2">
        {Array(canvasOption.length).fill().map( (v,i) => <CanvasCircle key = {canvasOption[i].id} option = {canvasOption[i]} />)}
        
        <div className="w_1440">
            <div className="basic_info">
                <div className="info_img">
                    <div className="info_pan">
                        <div className="info_outer_cir">
                            <div className="info_inner_cir">
                                <div className="info_inner_img"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info_desc">
                    <table>
                        <tbody>
                            <tr>
                                <td>이름</td>
                                <td>성주영</td>
                            </tr>
                            <tr>
                                <td>생년월일</td>
                                <td>89.05.31</td>
                            </tr>
                            <tr>
                                <td>주소</td>
                                <td>서울시 은평구 갈현동</td>
                            </tr>
                            <tr>
                                <td>자격증</td>
                                <td>웹디자인자격증   컴퓨터활용2급</td>
                            </tr>
                            <tr>
                                <td>이메일</td>
                                <td>jooyongs1@gmail.com</td>
                            </tr>
                            <tr>
                                <td>웹사이트</td>
                                <td><a href="jys89.dothome.com">jys89.dothome.com</a></td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="info_icando">
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/html.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_1" width="300px" height="40px"></canvas>
                                <p className="real_score">90%</p>
                            </div>
                        </div>
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/css.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_2" width="300px" height="40px"></canvas>
                                <p className="real_score">90%</p>
                            </div>
                        </div>
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/js.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_3" width="300px" height="40px"></canvas>
                                <p className="real_score">85%</p>
                            </div>
                        </div>
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/jquery.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_4" width="300px" height="40px"></canvas>
                                <p className="real_score">90%</p>
                            </div>
                        </div>
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/php.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_5" width="300px" height="40px"></canvas>
                                <p className="real_score">70%</p>
                            </div>
                        </div>
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/photoshop.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_6" width="300px" height="40px"></canvas>
                                <p className="real_score">80%</p>
                            </div>
                        </div>
                        <div className="work_item">
                            <div className="item_img">
                                <img src="img/illustrator.png" alt="포토샵"/>
                            </div>
                            <div className="item_score_box">
                                <canvas id="item_score_7" width="300px" height="40px"></canvas>
                                <p className="real_score">80%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="info_motto">
                    <span>안녕하세요 성주영의 포트폴리오입니다</span> 
                </div>
            </div>
        </div>
    </section>
  )
}
export default Sec2