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
  
  const MenuRef = useRef()
  return(
    <div className="header">
      <div className="logo">로고</div>
      <ul className="menu_ul" >
          {Array(Menu.length).fill('').map( (v,i) => <li key={Menu[i].id} className="menu_li">{Menu[i].txt}</li>)}
         
      </ul>
    </div>
  )
}
export default Header