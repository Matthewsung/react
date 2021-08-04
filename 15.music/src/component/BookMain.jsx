import {useEffect, useRef, useState} from 'react'
import axios from 'axios'
import Book from './Book'
const BookMain = () =>{
  const [value, setValue] = useState('')
  const [result, setResult] = useState([
    {
      authors:'',
      contents:'',
      datetime:'',
      isbn:'',
      price:0,
      sale_price:0,
      status:'',
      thumbnail:'',
      title:'',
      url:''
    }
  ])
  const key = process.env.REACT_APP_KAKAO_BOOK_KEY

  axios.defaults.baseURL='https://dapi.kakao.com/'
  useEffect(() => {
    !value?
    console.log('아직 준비중'):
    axios.get('v3/search/book',{
      params:{
        query: value,
        size:4
      },
      headers:{Authorization: `KakaoAK ${key}`}
    })
    .then(res =>  {
       setResult(res.data.documents)
       console.log(res.data.documents[0])
      })
    .catch(err => console.log(err))
  }, [value])
  const inputRef = useRef()
  const onSubmitQuery = (e) => {
    e.preventDefault()
    setValue(inputRef.current.value)
  }
  return (
    <>
      <form onSubmit={onSubmitQuery}>
        <input type="text" ref={inputRef} />
        <button>가져오기</button>
      </form>
      <ul>
        {result.map((v,i)=> <Book key={i} data={v}/>)}
      </ul>
    </>
  );

}
export default BookMain