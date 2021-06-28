// import React, { Component } from 'react';
import Try from './Try';

function getNumbers(){
  let num = [];
  let tmp ;
  for(let i=0; i < 1000; i++){
    if(num.length >= 4){break}
    tmp = Math.round(Math.random()* 8 +1);
    num.indexOf(tmp)>-1?console.log:num.push(tmp)
  }
  return num;
};

// class Numbaseball extends Component { 
//   constructor(props){
//     super(props);
//     this.state={
//       result:'', // h1에 들어갈 결과값
//       value:'', // input 안의 값
//       answer: getNumbers(),
//       tries:[], // 시도한 횟수
//     };
//   }
//   onChangeInput = (e) => {
//     this.setState({
//       value:e.target.value
//     })
//   };
//   onSubmitForm = (e)=>{
//     e.preventDefault();
//     console.log('////////////////////////////////////////////////////////')

//     if(this.state.value === this.state.answer.join('')){
//       console.log('맞다')
      
//       this.setState(()=>{
//         return {
//           result:'홈런',
//           tries:[...this.state.tries, { try:this.state.value, result:'홈런' }],//push 대신에 [...현재값, 새로운 값]을 넣는 방식으로 진행
//         }
//       });
//       alert('게임 다시 시작');
//       this.setState({
//         value:'',
//         answer:getNumbers(),
//         tries:[],
//       });
//     }
//     else{
//       console.log('아니다')
//       const answerArray = this.state.value.split('').map((v)=>{parseInt(v)})
//       let strike =0;
//       let ball = 0;
//       if(this.state.tries.length >= 9 ){
//         this.setState({
//           result:`10번 넘어서 실패 답은 ${this.state.answer}`
//         })
//         alert('게임 다시 시작');
//         this.setState({
//           value:'',
//           answer:getNumbers(),
//           tries:[],
//         })
//       }
//       else{
//         for(let i =0; i <4 ; i++){
//           if(answerArray[i] === this.state.answer[i]){
//             strike += 1;
//           }
//           else if(this.state.answer.includes(answerArray[i])) {
//             ball +=1;
//           }
//         }
//         this.setState(()=>{
//           return{
//             tries:[...this.state.tries,{try:this.state.value, result: `${strike} 스트라이크 ${ball} 볼 입니다`}],
//             value:''

//           }
//         })
//       }
//     }

//     console.log(getNumbers(), this.state.value,this.state.answer.join(''))
    
//   };
//   render(){
//     return(
//       <>
//         <h1>{this.state.result}</h1>
//         <form onSubmit={this.onSubmitForm}>
//           <input onChange={this.onChangeInput} value={this.state.value}></input>
//         </form>
//         <div>시도 : {this.state.tries.length}</div>
//         <ul>
//           {this.state.tries.map((v,i)=>{
//             return(
//               <Try key={ `${i+1}차 시도 : `} tryInfo={v} index = {i}/>
//             );
//           })}
//         </ul>
//       </>
//     )
//   }
// }

// export default Numbaseball;



import React, { Component, createRef, useState } from 'react';
// import Try from './Try';

// function getNumbers() { // 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
//   const candidate = [1,2,3,4,5,6,7,8,9];
//   const array = [];
//   for (let i = 0; i < 4; i += 1) {
//     const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
//     array.push(chosen);
//   }
//   return array;
// }

// const NumberBaseball = ()=>{
//   const [result, setResult] = useState('');
//   const [value, setValue] = useState('');
//   const [answer, setAnswer] = useState(getNumbers());
//   const [tries,setTries] = useState([]);

//   const onSubmitForm = (e) => {
//     e.preventDefault();
//     if (value === answer.join('')) {
//       setResult('홈런!!');
//       setTries((prevTries)=>{
//         return [...prevTries,{try:value, result:'홈런!'}]
//       })
//       alert('게임을 다시 시작합니다!');
//       setValue('');
//       setAnswer(getNumbers());
//       setTries([]);
//     } else { // 답 틀렸으면
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) { // 10번 이상 틀렸을 때
//         setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
//         alert('게임을 다시 시작합니다!');
//         setValue('');
//         setAnswer(getNumbers());
//         setTries([])
//       } else {
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === answer[i]) {
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         setTries((prevState)=>{
//           return [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}]
//         })
//         setValue('');
//       }
//     }
//   };

//   const onChangeInput = (e) => {
//     setValue(e.target.value)
//   };

//   const inputRef = createRef(); // this.inputRef

//   return(
//     <>
//       <h1>{result}</h1>
//       <form onSubmit={onSubmitForm}>
//         <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
//       </form>
//       <div>시도: {tries.length}</div>
//       <ul>
//         {tries.map((v, i) => {
//           return (
//             <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
//           );
//         })}
//       </ul>
//     </>
//   )
// }

class NumberBaseball extends Component {
  state = {
    result: '',
    value: '',
    answer: getNumbers(), // ex: [1,3,5,7]
    tries: [], // push 쓰면 안 돼요
  };

  onSubmitForm = (e) => {
    const { value, tries, answer } = this.state;
    e.preventDefault();
    if (value === answer.join('')) {
      this.setState((prevState) => {
        return {
          result: '홈런!',
          tries: [...prevState.tries, { try: value, result: '홈런!' }],
        }
      });
      alert('게임을 다시 시작합니다!');
      this.setState({
        value: '',
        answer: getNumbers(),
        tries: [],
      });
      this.inputRef.current.focus();
    } else { // 답 틀렸으면
      const answerArray = value.split('').map((v) => parseInt(v));
      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) { // 10번 이상 틀렸을 때
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
        });
        alert('게임을 다시 시작합니다!');
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: [],
        });
        this.inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        this.setState((prevState) => {
          return {
            tries: [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다`}],
            value: '',
          };
        });
        this.inputRef.current.focus();
      }
    }
  };

  onChangeInput = (e) => {
    console.log(this.state.answer);
    this.setState({
      value: e.target.value,
    });
  };

  inputRef = createRef(); // this.inputRef

  render() {
    const { result, value, tries } = this.state;
    return (
      <>
        <h1>{result}</h1>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.inputRef} maxLength={4} value={value} onChange={this.onChangeInput} />
        </form>
        <div>시도: {tries.length}</div>
        <ul>
          {tries.map((v, i) => {
            return (
              <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
            );
          })}
        </ul>
      </>
    );
  }
}

export default NumberBaseball; // import NumberBaseball;
