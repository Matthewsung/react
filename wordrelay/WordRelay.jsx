const React = require('react');
const {useState, useRef} = React;
const WordRelay = ()=>{
  const [words,setWords] = useState('제초');
  const [value,setValue] = useState('');
  const [result,setResult] = useState('');
  const inputRef = useRef(null);
  
  const onSubmitForm = (e)=>{
    e.preventDefault();
    if(words.slice(words.length - 1) == value.slice(0,1)){
      setResult ("정답입니다.") ,
      setWords(value),
      setValue(''),
      inputRef.current.focus()
    }
    else{
      setResult("틀렸습니다."),
      setValue(''),
      inputRef.current.focus()
    }
  };

  const onChangeInput = (e)=>{
    setValue(e.target.value);
  };

  return (
    <>
    <div>{words}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputRef} value={value} onChange={onChangeInput} />
        <button>입력</button>
      </form>
      <div>{result}</div>

    </>
  )
}



// class WordRelay extends React.Component {

//   constructor(props){
//     super(props);

//     this.state = {
//       words:'제로초',
//       value:'',
//       result:'',
//     }
//   };

  // onSubmitForm = (e)=>{
  //   e.preventDefault();
  //   if(this.state.words.slice(this.state.words.length - 1) == this.state.value.slice(0,1)){
  //     this.setState({
  //       result : "정답입니다.",
  //       words : this.state.value,
  //       value:'',
  //     })
  //     this.input.focus();
  //   }
  //   else{
  //     this.setState({
  //       result:"틀렸습니다.",
  //       value:'',
  //     })
  //     this.input.focus();
  //   }
  // };
  
  // onChangeInput = (e)=>{
  //   this.setState({ value : e.target.value})
  // };

//   input ;
//   onRefInput = (c) =>{
//     this.input = c;
//   };

  // render(){
  //   return (
  //     <>
  //     <div>{this.state.words}</div>
  //       <form onSubmit={this.onSubmitForm}>
  //         <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
  //         <button>입력</button>
  //       </form>
  //       <div>{this.state.result}</div>

  //     </>
  //   )
  // }
// }


module.exports = WordRelay;