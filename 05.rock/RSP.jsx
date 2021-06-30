import React,{ Component } from 'react';

const scores ={
  바위: 0,
  가위: 1,
  보 : -1,
}
const comScores ={
  바위: 0,
  가위:568,
  보 : 284,
}
class RSP extends Component {
  state = {
    result:'',
    imgCord: 0,// 284 / 568씩 증가
    score: 0,
  };
  
  interval;

  mixImg = () => {
    this.interval = setInterval (() => {
      if(this.state.imgCord == 0 ){
        this.setState({imgCord: 284})
      }
      else if(this.state.imgCord == 284 ){
        this.setState({imgCord: 568})
      }
      else if(this.state.imgCord == 568 ){
        this.setState({imgCord: 0})
      }
    },100)
  };

  onClickBtn = (choice) =>{
    clearInterval(this.interval);
    console.log(choice)
    // const myScore = scores[choice];
    // const computerScore = comScores[this.state.imgCord];
    // const differ = myScore - computerScore
    // console.log(differ)

    if(differ == 0){
      this.setState({
        result:'비김'
      })
    }
    else if(differ == 1){
      this.setState({
        result:'짐'
      })
      
    }
    else if(differ == -1){
      this.setState({
        result:'이김'
      })
    }


  }

  render(){
    return(
      <>
        <div id="computer" style={{background:`url(./img/rsp.jpg) ${this.state.imgCord}px 0`} }onClick={this.mixImg}></div>
        <button id="rock" className="btn" onClick={this.onClickBtn}>바위</button>
        <button id="scissor" className="btn" onClick={this.onClickBtn}>가위</button>
        <button id="paper" className="btn" onClick={this.onClickBtn}>보</button>
        <div>{this.state.result}</div>
      </>
    )
  }
}

export default RSP
