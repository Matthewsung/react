import React, { PureComponent, useState ,memo} from 'react';
import Try2 from './my2';

function getNum (){
  let num =[];
  let tmp;
  for(let i =0; i<9999; i++){
    tmp = Math.round(Math.random()*8+1);
    !num.includes(tmp)?num.push(tmp):console.log()
    if(num.length == 4){break}
  }
  return num
}
// const My = memo(()=>{
    
//   const [result,setresult] = useState('');
//   const [value,setValue]=useState('');
//   const [answer,setAnswer]=useState(getNum());
//   const [tries,setTries]=useState([]);

//   const onSubmitForm = (e)=>{
//     e.preventDefault();
//       if(answer.join('') === value){
//         setresult('홈런입니다!')
//         alert("정답입니다")
//         setValue('')
//         setAnswer(getNum())
//         setTries([])
//       }
//       else{
//         let strike = 0;
//         let ball = 0;
//         for(let i =0; i < value.length; i++){
//           if(answer.join('').indexOf(value[i]) > -1){
//             answer.join('').indexOf(value[i]) === i?strike += 1:ball += 1;
//           }
//         }
//         setTries((prevState)=>{
//           return(
//             [...prevState, {try:value, result:`${strike}스트라이크 ${ball}볼입니다`}]
//             )
//           })
//         setValue('')
//       }
//       console.log(answer.join('') , value)
//   }

//   const onChangeInput = (e)=>{
//     setValue(e.target.value)

//   };
//   return(
//     <>
//         <h1>{result}</h1>
//         <form onSubmit={onSubmitForm}>
//           <input onChange={onChangeInput} value = {value}/>
//         </form>
//         <ul>
//           {tries.map((v,index)=>{
//             return(
//               <Try2 key={index} Try={v} />
//             )
//           })}
//         </ul>
//       </>
//   )
// })










class My extends PureComponent{
  state = {
    result:'',
    value:'',
    answer:getNum(),
    tries:[]
  };

  onSubmitForm = (e) => { 
    e.preventDefault();
    if(this.state.answer.join('') === this.state.value){
      this.setState({
        result:'홈런입니다!'
      })
      alert("정답입니다")
      this.setState({
        value:'',
        answer:getNum(),
        tries:[]
      })
    }
    else{
      let strike = 0;
      let ball = 0;
      for(let i =0; i < this.state.value.length; i++){
        if(this.state.answer.join('').indexOf(this.state.value[i]) > -1){
          this.state.answer.join('').indexOf(this.state.value[i]) === i?strike += 1:ball += 1;
        }
      }
      this.setState((prevState)=>{
        return {
          tries: [...prevState.tries, {try:this.state.value, result:`${strike}스트라이크 ${ball}볼입니다`}],
          value:''
        }
      })
    }
    console.log(this.state.answer.join('') , this.state.value)
  };


  onChangeInput =(e)=>{
    console.log();
    this.setState({
      value:e.target.value
    })
  };

  input
  render() {
    return (
      <>
        <h1>{this.state.result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input onChange={this.onChangeInput} value = {this.state.value}/>
        </form>
        <ul>
          {this.state.tries.map((v,index)=>{
            return(
              <Try2 key={index} Try={v} />
            )
          })}
        </ul>
      </>
    )
  }
}

export default My