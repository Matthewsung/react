import React,{useState,useRef} from 'react'
import { Link } from 'react-router-dom';
export default function Gugudan() {
  const [first, setFirst] = useState(Math.ceil(Math.random() * 9));
  const [second, setSecond] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  //ref도 useRef를 이용한다
  const inputRef = useRef(null);

  const onChange = e => {
    setValue(e.target.value);
  };

  const onSubmit = e => {
    e.preventDefault();
    if (parseInt(value) === first * second) {
      setResult(`정답입니다. ${first} X ${second} =
                  ${first * second} `);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    } else {
      setResult(`틀렸습니다. ${first} X ${second} =
                  ${first * second} 입니다. `);
      setFirst(Math.ceil(Math.random() * 9));
      setSecond(Math.ceil(Math.random() * 9));
      setValue("");
    }
    inputRef.current.focus();
  };
  return (
    <>
      <div className="question">
        {first} X {second} = 
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={onChange} ref={inputRef} />
        <button>입력</button>
        <div className="result">{result}</div>
      </form>
    </>
  )
}
