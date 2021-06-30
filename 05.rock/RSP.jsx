import React,{ PureComponent } from 'react';

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

const computerChoice = (number) => {
  if(number == 0){
    return '바위'
  }
  else if(number == 568){
    return '가위'
  }
  else if(number == 284){
    return '보'
  }
}

class RSP extends PureComponent {
  state = {
    result:'',
    imgCord: 0,// 284 / 568씩 증가
    score: 0,
  };
  
  
  interval;

  componentDidMount(){
    this.interval = setInterval (this.changeHand,100)
  }
  componentWillUnmount(){
    clearInterval(this.interval)
  }
  changeHand =()=>{
    if(this.state.imgCord == 0 ){
      this.setState({imgCord: 284})
    }
    else if(this.state.imgCord == 284 ){
      this.setState({imgCord: 568})
    }
    else if(this.state.imgCord == 568 ){
      this.setState({imgCord: 0})
    }
  }


  onClickBtn = (choice) =>{
    clearInterval(this.interval);
    const myScore = scores[choice.target.innerHTML];
    const computerScore = scores[computerChoice(this.state.imgCord)];
    const differ = myScore - computerScore
    if([0].includes(differ)){
      this.setState({
        result:'비김'
      })
    }
    else if([1, -2].includes(differ)){
      this.setState((prevState)=>{
        return {
          result:'짐',
          score: prevState.score - 1
        }
      })
    }
    else if([-1, 2].includes(differ)){
      this.setState((prevState)=>{
        return{
          result:'이김',
          score: prevState.score + 1
        }
      })
    }
    setTimeout(() => {
      this.interval = setInterval (this.changeHand,100);
    }, 2000);
  }


  render(){
    return(
      <>
        <div id="computer" style={{background:`url(./img/rsp.jpg) ${this.state.imgCord}px 0`}}></div>
        <button id="rock" className="btn" onClick={this.onClickBtn}>바위</button>
        <button id="scissor" className="btn" onClick={this.onClickBtn}>가위</button>
        <button id="paper" className="btn" onClick={this.onClickBtn}>보</button>
        <h1>{this.state.result}</h1>
        <div>총 점수는 : {this.state.score}</div>
      </>
    )
  }
}

export default RSP
