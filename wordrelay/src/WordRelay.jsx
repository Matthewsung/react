import React,{useState} from "react";
const WordRelay = () => {
  const [word, setWord] = useState('성실');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const [recode, setRecode] = useState([])
  const inputEl = React.useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('딩동댕');
      setWord(value);
      setRecode([...recode, value])
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('땡!!!  다시 입력하세요');
      setValue('');
      inputEl.current.focus();
    }
    console.log(recode)
  };

  return (
    <>
      <div className="start">{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          placeholder="마지막 단어로 시작하세요"
          ref={inputEl}
          value={value}
          onChange={(e) => setValue(e.currentTarget.value)}
        />
        <button>입 력 !</button>
      </form>
      <div className="result">{result}</div>
      <div className="recode">{recode.join(' - ')}</div>
    </>
  );
};

export default WordRelay;