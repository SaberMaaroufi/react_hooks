import { useState } from 'react';
import './App.css';
import Movielist from './components/Movielist';
import Navigation from './components/Navigation';
import {Data} from './Data'
function App() {
  const [Movies,setMovies] = useState(Data)
  const [search,setSearch] = useState("")
  return (
    <div className="App">
      <Navigation setSearch={setSearch}search={search}/>
      <h1>Welcome to our movies</h1>
      <div>
      <Movielist Movies={Movies} search={search}/>
      </div>
    </div>
  );
}

export default App;
