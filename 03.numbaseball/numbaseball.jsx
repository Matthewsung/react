import React, { PureComponent,  useRef, useCallback,createRef, useState  } from 'react';
import Try from './Try';
const getNumbers = () => {
  const candidates = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};


// const NumberBaseball = () => {
//   const [answer, setAnswer] = useState(getNumbers());
//   const [value, setValue] = useState('');
//   const [result, setResult] = useState('');
//   const [tries, setTries] = useState([]);
//   const inputEl = useRef(null);

//   const onSubmitForm = useCallback((e) => {
//     e.preventDefault();
//     if (value === answer.join('')) {
//       setTries((t) => ([
//         ...t,
//         {
//           try: value,
//           result: '홈런!',
//         }
//       ]));
//       setResult('홈런!');
//       alert('게임을 다시 실행합니다.');
//       setValue('');
//       setAnswer(getNumbers());
//       setTries([]);
//       inputEl.current.focus();
//     } else {
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) {
//         setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`); // state set은 비동기
//         alert('게임을 다시 시작합니다.');
//         setValue('');
//         setAnswer(getNumbers());
//         setTries([]);
//         inputEl.current.focus();
//       } else {
//         console.log('답은', answer.join(''));
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === answer[i]) {
//             console.log('strike', answerArray[i], answer[i]);
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             console.log('ball', answerArray[i], answer.indexOf(answerArray[i]));
//             ball += 1;
//           }
//         }
//         setTries(t => ([
//           ...t,
//           {
//             try: value,
//             result: `${strike} 스트라이크, ${ball} 볼입니다.`,
//           }
//         ]));
//         setValue('');
//         inputEl.current.focus();
//       }
//     }
//   }, [value, answer]);

//   const onChangeInput = useCallback((e) => setValue(e.target.value), []);

//   return (
//     <>
//       <h1>{result}</h1>
//       <form onSubmit={onSubmitForm}>
//         <input
//           ref={inputEl}
//           maxLength={4}
//           value={value}
//           onChange={onChangeInput}
//         />
//         <button>입력!</button>
//       </form>
//       <div>시도: {tries.length}</div>
//       <ul>
//         {tries.map((v, i) => (
//           <Try key={`${i + 1}차 시도 : ${v.try}`} tryInfo={v}/>
//         ))}
//       </ul>
//     </>
//   );
// };


// function getNumbers(){
//   let num = [];
//   let tmp ;
//   for(let i=0; i < 1000; i++){
//     if(num.length >= 4){break}
//     tmp = Math.round(Math.random()* 8 +1);
//     num.indexOf(tmp)>-1?console.log:num.push(tmp)
//   }
//   return num;
// };
// const NumberBaseball = () => {
//   const [result, setResult] = useState('');
//   const [value, setValue] = useState('');
//   const [answer, setanswer] = useState(getNumbers());
//   const [tries, setTries] = useState([]);
 
//   const onSubmitForm = (e) => {
//     const { value, tries, answer } = this.state;
//     e.preventDefault();
//     if (value === answer.join('')) {
//       setResult('홈런!')
//       setTries((prevState)=>{
//         return(
//           [...prevState,{try:value,result:'홈런'}]
//         )
//       })
      
//       alert('게임을 다시 시작합니다!');
//       setValue('');
//       setanswer(getNumbers());
//       setTries([]);
//       this.inputRef.current.focus();
//     } else { // 답 틀렸으면
//       const answerArray = value.split('').map((v) => parseInt(v));
//       let strike = 0;
//       let ball = 0;
//       if (tries.length >= 9) { // 10번 이상 틀렸을 때
//         setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')}입니다`)
//         alert('게임을 다시 시작합니다!');
//         setValue('');
//         setanswer(getNumbers());
//         setTries([]);
//         this.inputRef.current.focus();
//       } else {
//         for (let i = 0; i < 4; i += 1) {
//           if (answerArray[i] === answer[i]) {
//             strike += 1;
//           } else if (answer.includes(answerArray[i])) {
//             ball += 1;
//           }
//         }
//         setResult((prevState)=>{
//           tries:[...prevState,{try:value,result:`${strike} 스트라이크 , ${ball} 볼입니다`}]
//         })
//         setValue('');
//         this.inputRef.current.focus();
//       }
//     }
//   };

//   const onChangeInput = (e) => {
//     setValue(e.target.value);
//   };
//   const inputRef =()=>{

//   }
//   return (
//       <>
//         <h1>{result}</h1>
//         <form onSubmit={onSubmitForm}>
//           <input ref={inputRef} maxLength={4} value={value} onChange={onChangeInput} />
//         </form>
//         <div>시도: {tries.length}</div>
//         <ul>
//           {tries.map((v, i) => {
//             return (
//               <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
//             );
//           })}
//         </ul>
//       </>
//   )
// }

class NumberBaseball extends PureComponent {
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
        <h1 className="result">{result}</h1>
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
