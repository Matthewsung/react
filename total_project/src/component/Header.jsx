import React, { useRef, useState } from 'react'
const Menu = [
  {
    id:1,
    txt:"MAIN"
  },
  {
    id:2,
    txt:"ABOUT ME"
  },
  {
    id:3,
    txt:"PORTFOLIO"
  },
  {
    id:4,
    txt:"CONTACT"
  },
]
const Header =()=>{
  const onClickMenu = (e) => {
    Array(Menu.length).fill().map((v,i)=>{
      if(e.target.innerText === Menu[i].txt){
        const scrollTop = document.querySelector(`.sec_${Menu[i].id}`).getBoundingClientRect().height 
        if(Menu[i].id === 3 ){
          window.scrollTo({top : scrollTop * 2, left : 0, behavior:'smooth' })  
        }
        else if(Menu[i].id === 4 ){
          window.scrollTo({top : scrollTop * Menu.length, left : 0, behavior:'smooth' })  
        }
        else{
          window.scrollTo({top : scrollTop* i, left : 0, behavior:'smooth' })

        }
      }

    })
  }
  const MenuRef = useRef()
  return(
    <div className="header">
      <div className="logo">로고</div>
      <ul className="menu_ul" >
          {Array(Menu.length).fill('').map( (v,i) => <li key={Menu[i].id} className="menu_li" onClick={onClickMenu}>{Menu[i].txt}</li>)}
         
      </ul>
    </div>
  )
}
export default Header