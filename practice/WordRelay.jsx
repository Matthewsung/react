const React = require('react');
const {Component} = React;
class WordRelay extends Component {
  state = {
    text:'h32lo'
  };
  render(){
    return <h1>{this.state.text}</h1>
  }
}
module.exports = WordRelay;