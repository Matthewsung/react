import React from 'react'

const Notice_content = ({item})=>{


  return (
    <div className="n_content">
    <div className="n_type">{item.type}</div>
    <div className="n_topic">{item.topic}</div>
    <div className="n_detail">{item.detail}</div>
    <div className="n_bot">
      <div className="n_date">{item.date}</div>
      <div className="n_more">
        <img src="img/add.png" alt="더보기" />
      </div>
    </div>
  </div>
  )
}
export default Notice_content