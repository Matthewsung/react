import React,{Component} from 'react';
import './App.css';
import axios from 'axios';
import Movie from './movies'

class App extends Component{
  state={
    count:0,
    isLoading:true,
    movies:[],
  };
  onClickBtn = (value)=>{
    if(value.target.value === "-"){
      this.setState(cur => ({count: cur.count - 1}))
    }
    else{
      this.setState(cur => ({count: cur.count + 1}))
    }
  }
  getMovies = async ()=>{
    const {data:{data:{movies}}} = await axios.get("https://yts.mx/api/v2/list_movies.json");
    this.setState({movies:movies, isLoading:false})
  }
  componentDidMount() {
    this.getMovies();
  }
  render(){
    const {isLoading,movies,count} = this.state;
    return(
      <>
        <div>{isLoading?"Loading":movies.map((value)=> 
        <Movie 
        key ={value.id}
        id={value.id} 
        year={value.year} 
        title={value.title} 
        summary={value.summary} 
        poster={value.medium_cover_image}
        genres={value.genres}/>)}</div>
        
        <h1>{count}입니다</h1>
        <button onClick={this.onClickBtn} value="-">-</button>
        <button onClick={this.onClickBtn} value="+">+</button>
      </>
    )
  }
}
// function App() {
//   return (
//     <>
//       <h1>hhhh</h1>
//       {foodILike.map((v,i) => <AAA v={v.name}/>)}    
//     </>
//   );
// }

export default App;
