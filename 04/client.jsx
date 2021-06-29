import React from 'react';
import ReactDom from 'react-dom';

// import ResponseCheck from './response';
// ReactDom.render(<ResponseCheck/>,document.querySelector('#root'));

import ResponseCheckHooks from './responseHooks';
ReactDom.render(<ResponseCheckHooks/>,document.querySelector('#root2'));


import My from './my';
ReactDom.render(<My/>, document.querySelector('#root'))