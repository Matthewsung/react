import React, { useEffect } from 'react';
import './culture.css'
import Culture_slide from './culture_slide';
const url=[
  {
    id:1,
    url:"img/slide_1.png",
    side1:"교육",
    side2:"안산",
    title: "2021 HAPPY LIFE HAPPY MINE ",
    loc:"울타리넘어",
    date:"2021.07.01 ~ 2021.12.31",
  },
  {
    id:2,
    url:"img/slide_2.jpg",
    side1:"기획",
    side2:"성남",
    title: "은밀한 글쓰기",
    loc:"그림책NORi",
    date:"2021.07.05 ~ 2021.12.31"
  },
  {
    id:3,
    url:"img/slide_3.jpg",
    side1:"공연/전시",
    side2:"군포",
    title: "2021 군포아트마켓 수공예품 전시",
    loc:"군포시생활문화센터 커뮤니티갤러리홀",
    date:"2021.07.14 ~ 2021.07.24"
  },
  {
    id:4,
    url:"img/slide_4.jpg",
    side1:"기획",
    side2:"의왕",
    title: "가족의 모양",
    loc:"커뮤니티 공간 들락날락(이놀 유한책임회사)",
    date:"2021.07.01 ~ 2021.07.22"
  }
]
const Culture = ()=>{
  let culture_slide_length = Array(3).fill().map((v,i) => i+1);
  let c_slide;
  let c_width;
  let arr = Array(url.length*3).fill('');

  useEffect(()=>{
    c_slide = document.querySelectorAll('.c_slide')
    c_width = c_slide[0].clientWidth + 20
    arr = Array(c_slide.length).fill(-(c_width*url.length)).map((v,i)=> v + (c_width*i) + "px")
    arr.map((v,i)=> c_slide[i].style.left = v)
    console.log(-(c_width*url.length)+c_width*(url.length*3 - 1))    
  },[])

  const onClickLeft = ()=>{
    Array(c_slide.length).fill().map((v,i)=>c_slide[i].style.left === -(c_width*url.length)+"px" ? c_slide[i].style.transition="none" : c_slide[i].style.transition= "left 1s")
    arr.unshift(arr[c_slide.length-1]) 
    arr.pop(arr[c_slide.length-1])
    arr.map((v,i)=> c_slide[i].style.left = v)
  }
  const onClickRight = ()=>{
    Array(c_slide.length).fill().map((v,i)=>c_slide[i].style.left === -(c_width*url.length)+c_width*(url.length*3 - 1)+"px" ? c_slide[i].style.transition="none" : c_slide[i].style.transition= "left 1s")
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
      {arr.map((v,i)=> <Culture_slide key={i} index={i} url={url}/>)}
      {/* <Culture_slide url={url}/> */}
    </div>
    <div className="c_more">더보기</div>
   </div>
 ) 
}
export default Culture
