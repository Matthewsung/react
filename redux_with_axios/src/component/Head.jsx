import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
export default function Head() {
  return (
    <>
      <Wrapper>
        <Header>
          <Link to='/home'>
            <Logo />
          </Link>
          <Menu>
            <Link to='/beerlist'>
              <BeerList>BEER LIST</BeerList>
            </Link>
            <Login>LOGIN</Login>
            <Cart />
          </Menu>
        </Header>
      </Wrapper>
    </>
    )
}
const Wrapper = styled.div `
  width:100%;
  background: #000;
`
const Header = styled.div`
  width:100%;
  max-width:1440px;
  margin: 0 auto;
  display:flex;
  flex-direction: row;
  justify-content: space-between;
`
const Logo = styled.div`
  width: 300px;
  height: 100px;
  background: url(home/img/logo.png);
`
const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 30px;
  color:#f1c423;
`
const BeerList = styled.div`
  padding:0 20px ;
  &:hover{
    color:#fff;
    background:#f1c423;
  }
`
const Login = styled.div`
  padding:0 20px ;
  &:hover{
    color:#fff;
    background:#f1c423;
  }
`
const Cart = styled.div`
width:100px;
height:40px;
  background : url(home/img/cart.png) no-repeat center ;
`