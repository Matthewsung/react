import React from 'react';
import Banner from './Banner'
import Education from './Education'
import Intro from './intro'
import Culture from './culture'
import Sns from './sns'
import Notice from './notice'
import '../index.css'

const Main = () =>{
  
  return (
    <>
      <div className="w_1440"><Banner /></div>
      <Education/>
      <div className="w_1440"><Intro /></div>
      <div className="w_1440"><Culture /></div>
      <Sns />
      <Notice />
    </>
  )
}

export default Main