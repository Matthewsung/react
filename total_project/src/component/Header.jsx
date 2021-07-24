import React, { useState } from 'react'
const Header =()=>{
  const [isHover, setIsHover] = useState(false)
 
  return(
    <div className="header">
      <div className="logo">로고</div>
      <ul className="menu_ul" >
          <div className={isHover?"menu_li menu_li_act":"menu_li"} >MAIN</div>
          <div className={isHover?"menu_li menu_li_act":"menu_li"}>ABOUT ME</div>
          <div className={isHover?"menu_li menu_li_act":"menu_li"}>PORTFOLIO</div>
          <div className={isHover?"menu_li menu_li_act":"menu_li"}>CONTACT</div>
      </ul>
    </div>
  )
}

export default Header