import React from 'react';
import ReactDom from 'react-dom';

import Games from './Games';
const Hot = hot(Games);
ReactDom.render(<Hot/>,document.querySelector('#root'));