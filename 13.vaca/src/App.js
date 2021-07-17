import './App.css';
import Head from './component/Head'
import db from './db/db.json'
function App() {
  return (
    <div className="App">
      <Head db={db}/>
    </div>
  );
}

export default App;
