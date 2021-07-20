import React from 'react';

const Program = ({data, index, onMouseEnter,onMouseLeave})=>{
// console.log(data,index)
  return (
    <div className="program" style={{marginRight: 20+"px"}} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <div className="p_img">
        <img src={data.url} alt="슬라이드1" />
      </div>
      <div className="p_txt_1">
        <h6><span>#교육 </span>{data.date}</h6>
        <h3>{data.title}</h3>
      </div>
      <div className="p_text">
        <div className="p_loc">{data.loc}</div>
        <div className="p_title">{data.title}</div>
        <div className="p_detail"><p>{data.detail}</p> {data.date}</div>
        <div className="p_more">more</div>
      </div>
    </div>
  )
}
export default Program