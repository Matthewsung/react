import React, { useEffect } from 'react';
import './culture.css'
import Culture_slide from './culture_slide';

const Culture = ()=>{
  let c_slide;
  let c_width;
  let arr;
  useEffect(()=>{
    c_slide = document.querySelectorAll('.c_slide')
    c_width = c_slide[0].clientWidth + 20
    arr = Array(c_slide.length).fill('').map((v,i)=> i !==c_slide.length-1?c_width*i +"px":c_width*-1+"px")
    console.log(arr[c_slide.length-1])
    arr.map((v,i)=> c_slide[i].style.left = v)



  },[])
  const onClickLeft = ()=>{
    arr.unshift(arr[c_slide.length-1])
    arr.pop(arr[c_slide.length-1])
    arr.map((v,i)=> c_slide[i].style.left = v)
  }
  const onClickRight = ()=>{
    arr.push(arr[0])
    arr.shift(0)
    arr.map((v,i)=> c_slide[i].style.left = v)
  }
 return(
   <div className="culture_box">
    <div className="c_title">
      <h1>나와 꼭 맞는 생활 문화</h1>
      <div>나와 꼭 맞는 생활문화를 검색해 보세요</div>
    </div>
    <div className="c_mid">
      <div className="mid_L" onClick={onClickLeft}><img src="img/arrow_left.svg" alt="" /></div>
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
      <div className="mid_R" onClick={onClickRight}><img src="img/arrow_right.svg" alt="" /></div>
    </div>
    <div className="c_slide_box">
      <Culture_slide />
      <Culture_slide />
      <Culture_slide />
      <Culture_slide />    
      <Culture_slide />    
    </div>
    <div className="c_more">더보기</div>
   </div>
 ) 
}
export default Culture
