const React = require('react');


    const GuGudan = () => { 
      const [num1,setNum1] = React.useState(Math.ceil(Math.random()*9+1));
      const [num2,setNum2] = React.useState(Math.ceil(Math.random()*9+1));
      const [value,setValue] = React.useState('');
      const [result,setResult] = React.useState('');
      const inputRef = React.useRef();
      const onChange = (e)=>{ 
        setValue(e.target.value);
      }
      const onSubmit = () => {
        event.preventDefault();
        if(parseInt(value) === num1 * num2){
          setResult("정답");
          setNum1(Math.ceil(Math.random()*9+1));
          setNum2(Math.ceil(Math.random()*9+1));
          setValue("");
          inputRef.current.focus();
        }
        else{
          setResult("오답입니다")
          setValue('')
          inputRef.current.focus();
        }
      }
      
      return (
        <React.Fragment>
             <div>{num1} 곱하기 {num2}는?</div>
             <form onSubmit={onSubmit}>
               <input ref={inputRef} type="number" value={value} onChange = {onChange}/>
               <button>입력</button>
             </form>
             <div>{result}</div>
           </React.Fragment>
      )
    }

module.exports = GuGuDan;