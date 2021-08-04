const Book = ({data}) => {
console.log(data)

// authors:'',
// content:'',
// datetime:'',
// isbn:'',
// price:0,
// sale_price:0,
// status:'',
// thumbnail:'',
// title:'',
// url:''
  return(
    <li>
      <h1>책 제목 : {data.title}</h1>
      <h3>책 저자 : {data.authors}</h3>
      <h5>책 소개 : {data.contents}</h5>
      <h6>책 가격 : {data.price}/ 세일:{data.sale_price}</h6>
      <img src={data.thumbnail} alt="" />
      <a href={data.url}>{data.url}</a>
      <div>{data.status}</div>
      <div>{data.datetime}</div>
    </li>
  )
}
export default Book