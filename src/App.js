import { useEffect, useState } from 'react';
import './App.css';
import MovieCard from './MovieCard';


const API_URL = 'https://www.omdbapi.com?apikey=8a58b512'

function App() {

  const [movies, setMovies] = useState([])
  const [search, setSearch] = useState('')


  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  useEffect(() => {
    searchMovies()
  }, [])

  return (
    <div className="app">
      <h1>Movie Finder</h1>
      <div className='search'>
        <input
          placeholder='Search for Movies'
          value={search}
          onChange={(e) => {setSearch(e.target.value)}}
        />
        <button 
          className='button'
          onClick={() => {searchMovies(search)}}
        >Search
        </button>
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}

    </div>
  );
}

export default App;
