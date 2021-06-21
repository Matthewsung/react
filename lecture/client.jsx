const React = require('react');
const ReactDom = require('react-dom');

const WordRelay = require('./WordRelay'); // WordRelay 파일을 불러옴
ReactDom.render(<WordRelay />, document.querySelector('#root'));