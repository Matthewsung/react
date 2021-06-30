import React from 'react';
import ReactDom from 'react-dom';


import RSP from './RSP';
ReactDom.render(<RSP/>, document.querySelector('#root'))

import RSPHooks from './RSPHooks';
ReactDom.render(<RSPHooks/>, document.querySelector('#root2'))