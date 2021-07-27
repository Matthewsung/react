import React, { useEffect, useState } from 'react'
import {Link} from 'react-router-dom';
import CanvasCircle from './CanvasCircle'
import CanvasPercent from './CanvasPercent';
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
const percentOption=[
    {
        id:1,
        url:"img/html.png",
        alt:'포토샵',
        score : "90"
    },
    {
        id:2,
        url:"img/css.png",
        alt:'포토샵',
        score : "90"
    },
    {
        id:3,
        url:"img/js.png",
        alt:'포토샵',
        score : "85"
    },
    {
        id:4,
        url:"img/jquery.png",
        alt:'포토샵',
        score : "90"
    },
    {
        id:5,
        url:"img/php.png",
        alt:'포토샵',
        score : "70"
    },
    {
        id:6,
        url:"img/react.png",
        alt:'포토샵',
        score : "90"
    },
    {
        id:7,
        url:"img/photoshop.png",
        alt:'포토샵',
        score : "80"
    },
    {
        id:8,
        url:"img/illustrator.png",
        alt:'포토샵',
        score : "80"
    },
]

const Sec2 = ()=>{
    const [isShow,setIsShow]= useState(false)
    const ScrollEvent = ()=>{
        const sec_2 = document.querySelector('.sec_2')
        const sec_2Top = sec_2.getBoundingClientRect().top;
        const sec_2Height = sec_2.getBoundingClientRect().height;
        //이미지 나오는 animation
        if(sec_2Top - (sec_2Height * 0.2) <= 0){
            const infoPan = document.querySelector('.info_pan')
            const infoOuterCir = document.querySelector('.info_outer_cir')
            const infoInnerImgr = document.querySelector('.info_inner_img')
            infoPan.style.animation = "back_pan 1s forwards"
            infoOuterCir.style.animation = "circle_big 0.25s 0.75s forwards"
            infoInnerImgr.style.animation = "img_up 0.3s 1s forwards"
            // 퍼센트 차는 
            setIsShow(true)
        }
    }
    const Makeement = ()=>{
       return Array(percentOption.length).fill().map((v,i)=><CanvasPercent key={percentOption[i].id} percentOption={percentOption[i]}/>)
    }

    useEffect(()=>{
        window.addEventListener('scroll',ScrollEvent)
    },[])



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
                                <td>
                                    jooyongs1@gmail.com
                                </td>
                            </tr>
                            <tr>
                                <td>Github</td>
                                <td>
                                    <a href="https://github.com/Matthewsung">https://github.com/Matthewsung</a>                                    
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="info_icando">
                        {isShow?Makeement():''}
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