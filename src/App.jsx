import { useState } from 'react';
import Movie_Card from './components/Movie_Card';
import MovieData from './MovieData.json';
function App() {

const[data,setData] = useState(MovieData);

  return (
    <>
      <Movie_Card Data={data}/>
    </>
  )
}

export default App
