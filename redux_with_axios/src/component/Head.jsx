import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function Head() {
  return (
    <>
      <Header>
        <Link to='/home'>
          <h1>HOME</h1>
        </Link>
        <Link to='/beerlist'>
          <h1>BeerList</h1>
        </Link>
      </Header>
    </>
    )
}
const Header = styled.div`
  width:100%;
  display:flex;
  
`