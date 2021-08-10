import React from 'react'
import styled from 'styled-components'
export default function Main() {
  return (
    <>
      <MainImg >
        TRY NEW BEERS
      </MainImg>
    </>
  )
}
const MainImg = styled.div`
  width:100%;
  height:calc(100vh - 100px);
  line-height: 130vh;
  
  font-size: 60px;
  text-align: center;
  
  background: url(/home/img/main_img.jpg) no-repeat center / cover;
  color: yellow;
  opacity:0.8;
`