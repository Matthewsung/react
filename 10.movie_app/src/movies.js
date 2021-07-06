import React from 'react'
import './movies.css'

function Movie ({id, year, title, summary, poster, genres }){
  return (
    <>
      <h1 className="title">제목 : {title}</h1>
      <img src={poster} alt={title}/>
      <h5>{year}</h5>
      <h3>장르 : {genres}</h3>
      <h1>{summary}</h1>

    </>
  )
}
export default Movie