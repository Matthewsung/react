import React,{Component} from 'react';
import {Link} from 'react-router-dom';

function Nav () {

    return(
      <>
        <Link to="/">Home</Link>
        <Link to="/home/intro">Home_intro</Link>
        <Link to="/about">about</Link>
        <Link to={{
          pathname:"/detail",
          state:{
            
          }
        }}>about</Link>
      </>
    )


}


export default Nav;
