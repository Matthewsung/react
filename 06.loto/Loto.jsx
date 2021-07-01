import React, {Component, useState, useRef, useEffect} from 'react';
import Ball from './Ball';


function getnumber(){
  const candidate = Array(45).fill().map((value,index)=>{ return index + 1});
  const shuffle = [];
  while(candidate.length > 0){
    shuffle.push( candidate.splice(Math.floor(Math.random() * candidate.length) , 1) )
  }
  const bonus = shuffle[shuffle.length - 1]
  return [...shuffle.slice(0,6) , bonus];
};
const Loto = () => {
  const [winNumbers, setWinNumbers] = useState(getnumber());
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);
  const timeOust = useRef([]);
  const runTimeOuts = () => {
    for(let i =0; i < winNumbers.length-1; i++){
      timeOuts[i] = setTimeout( ()=>{
        setWinBalls((prevState) => {
          return [...prevState.winBalls,winNumbers[i] ]
        })
      },100*(i+1))
    }
    timeOuts[6] = setTimeout(() => {
      setBonus(winNumbers[winNumbers.length-1])
      setRedo(true)
    },700)
  }
  const onClickRedo = ()=>{
    setWinNumbers(getnumber())
    setWinBalls([])
    setBonus(null)
    setRedo(false)
    
    timeOuts=[]; 
  }

  useEffect(()=>{
    runTimeOuts();
    return(
      winBalls.length == 0?runTimeOuts():()=>{}
    )
  },[])
  return(
    <>
        <div>당첨 숫자</div>
        <div id="결과창">
            {winBalls.map((v)=><Ball key={v} number={v}/>)}
        </div>
        <div>보너스!</div>
        {bonus && <Ball number={bonus}/>}
        {redo && <button onClick={this.onClickRedo }>한번더!</button>}
        
      </>
  )
}
// class Loto extends Component {
//   state = {
//     winNumbers : getnumber(),
//     winBalls:[],
//     bonus:null,
//     redo:false,
//   };
//   timeOuts=[];
//   runTimeOuts = () => {
//     for(let i =0; i < this.state.winNumbers.length-1; i++){
//       this.timeOuts[i] = setTimeout( ()=>{
//         this.setState((prevState)=>{
//           return{
//             winBalls: [...prevState.winBalls,this.state.winNumbers[i] ]
//           }
//         })
//       },100*(i+1))
//     }
//     this.timeOuts[6] = setTimeout(() => {
//       this.setState({
//         bonus: this.state.winNumbers[this.state.winNumbers.length-1],
//         redo:true
//       })
//     },700)
//   }
//   componentDidMount(){
//     this.runTimeOuts();
//   };
//   componentDidUpdate(prevProps,prevState){
//     if(this.state.winBalls.length == 0){
//       this.runTimeOuts();
//     }
//   }
//   componentWillUnmount(){
//     this.timeOuts.forEach((v)=>{
//       clearTimeout(v)
//     })
//   }
//   onClickRedo = ()=>{
//     this.setState({
//       winNumbers : getnumber(),
//       winBalls:[],
//       bonus:null,
//       redo:false,
//     })
//     this.timeOuts=[]; 
//   }
//   render (){
//     const{winBalls,bonus, redo } = this.state;
//     return(
//       <>
//         <div onClick={this.onClickH1}>당첨 숫자</div>
//         <div id="결과창">
//             {winBalls.map((v)=><Ball key={v} number={v}/>)}
//         </div>
//         <div>보너스!</div>
//         {bonus && <Ball number={bonus}/>}
//         {redo && <button onClick={this.onClickRedo }>한번더!</button>}
        
//       </>
//     )
//   }
// }


export default Loto