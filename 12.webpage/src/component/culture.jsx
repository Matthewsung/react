import React from 'react';
import './culture.css'
const Culture = ()=>{

 return(
   <div className="culture_box">
    <div className="c_title">
      <h1>나와 꼭 맞는 생활 문화</h1>
      <div>나와 꼭 맞는 생활문화를 검색해 보세요</div>
    </div>
    <div className="c_mid">
      <div className="mid_L"><img src="img/arrow_left.svg" alt="" /></div>
      <div className="mid_C">
        <select>
          <option value="구분">구분</option>
          <option value="교육">교육</option>
          <option value="체험">체험</option>
          <option value="축제/이벤트">축제/이벤트</option>
          <option value="기획">기획</option>
        </select>
        <select>
          <option value="장르">장르</option>
          <option value="목공">목공</option>
          <option value="춤">춤</option>
          <option value="악기/음악">악기/음악</option>
          <option value="연극">연극</option>
        </select>
      </div>
      <div className="mid_R"><img src="img/arrow_right.svg" alt="" /></div>
    </div>
    <div className="c_slide_box">
      <div className="c_slide">
        <div className="slide_img">
          <img src="img/slide_1.png" alt="" />
          <div className="side_txt">
            <div>교육</div>
            <div>안산</div>
          </div>
        </div>
        <div className="slide_txt">
          <div className="c_slide_title"><span>진행중</span> 2021 HAPPY LIFE HAPPY MINE</div>
          <div className="c_loc">울타리넘어</div>
          <div className="c_term">2021.07.01 ~ 2021.12.31</div>
        </div>
      </div>
      <div className="c_slide">
        <div className="slide_img">
          <img src="img/slide_1.png" alt="" />
          <div className="side_txt">
            <div>교육</div>
            <div>안산</div>
          </div>
        </div>
        <div className="slide_txt">
          <div className="c_slide_title"><span>진행중</span> 2021 HAPPY LIFE HAPPY MINE</div>
          <div className="c_loc">울타리넘어</div>
          <div className="c_term">2021.07.01 ~ 2021.12.31</div>
        </div>
      </div>
      <div className="c_slide">
        <div className="slide_img">
          <img src="img/slide_1.png" alt="" />
          <div className="side_txt">
            <div>교육</div>
            <div>안산</div>
          </div>
        </div>
        <div className="slide_txt">
          <div className="c_slide_title"><span>진행중</span> 2021 HAPPY LIFE HAPPY MINE</div>
          <div className="c_loc">울타리넘어</div>
          <div className="c_term">2021.07.01 ~ 2021.12.31</div>
        </div>
      </div>
    <div className="c_slide">
        <div className="slide_img">
          <img src="img/slide_1.png" alt="" />
          <div className="side_txt">
            <div>교육</div>
            <div>안산</div>
          </div>
        </div>
        <div className="slide_txt">
          <div className="c_slide_title"><span>진행중</span> 2021 HAPPY LIFE HAPPY MINE</div>
          <div className="c_loc">울타리넘어</div>
          <div className="c_term">2021.07.01 ~ 2021.12.31</div>
        </div>
      </div>
    
    </div>
    <div className="c_more">더보기</div>
   </div>
 ) 
}
export default Culture
