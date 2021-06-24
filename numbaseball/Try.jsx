import React, { Component } from 'react';

class Try extends Component {
  render() {
    return (
      // <li key={v.num}>
      <li key={i}>
        {/* <b>{v.fruit}</b> - {v.taste} */}
        <b>과일</b> - 맛있어요
        <div>컨텐츠1</div>
        <div>컨텐츠2</div>
        <div>컨텐츠3</div>
        <div>컨텐츠4</div>
      </li>
    )
  }
};

export default Try;