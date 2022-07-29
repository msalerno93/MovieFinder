import { useEffect } from 'react';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com?apikey=8a58b512'

function App() {

  const movie1 = {
    Poster: "https://m.media-amazon.com/images/M/MV5BYjFhN2RjZTctMzA2Ni00NzE2LWJmYjMtNDAyYTllOTkyMmY3XkEyXkFqcGdeQXVyNTA0OTU0OTQ@._V1_SX300.jpg",
    Type: "movie",
    Title: "Italian Spiderman",
    Year: "2007"
  }

  const searchMovies = async (title) => {

    const response = await fetch(`${API_URL}&s=${title}`)
    const data = await response.json()

    console.log(data.Search);
  }

  useEffect(() => {
    searchMovies('Spiderman')
  }, [])

  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value='Superman'
          onChange={() => {}}
        />
        <button 
          className='button'
          onClick={() => {}}
        >Search
        </button>
      </div>
      <div className='container'>
        <MovieCard movie1={movie1} />
      </div>
    </div>
  );
}

export default App;
