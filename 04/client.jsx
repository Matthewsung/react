import React from 'react';
import ReactDom from 'react-dom';

import ResponseCheck from './response';
ReactDom.render(<ResponseCheck/>,document.querySelector('#root'));
import ResponseCheckHooks from './responseHooks';
ReactDom.render(<ResponseCheckHooks/>,document.querySelector('#root2'));