import React, { Component } from 'react';


const Try = ({tryInfo})=>{
  return(
    <li className="try_li">
      <div>{tryInfo.try}</div>
      <div>{tryInfo.result}</div>
    </li>
  )
}

export default Try;