import React from 'react'
import { Link } from 'react-router-dom'
export default function Head() {
  return (
    <>
      <Link to='/home'>
        <h1>HOME</h1>
      </Link>
      <Link to='/beerlist'>
        <h1>BeerList</h1>
      </Link>
    </>
    )
}
