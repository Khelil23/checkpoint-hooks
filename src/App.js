import React, {useState} from 'react';
import {moviesHome} from './Components/MoviesHome'
import MoviesList from './Components/MoviesList'
import MoviesAdd from './Components/MoviesAdd'
import MoviesSearch from './Components/MoviesSearch'
import './App.css';

function App() {
  const [moviesList, setMoviesList] = useState(moviesHome);
  const [nameSearch, setNameSearch] = useState('');
  const [ratingSearch, setRatingSearch] = useState(1);

  const addNewMovie = (e, newMovie) => {
    e.preventDefault();
    setMoviesList([...moviesList, newMovie]);
  };
  return (
  <div>
     <MoviesSearch 
        setNameSearch={setNameSearch}
        ratingSearch={ratingSearch}
        setRatingSearch={setRatingSearch}
      />
      <MoviesList
        moviesList={moviesList}
        nameSearch={nameSearch}
        ratingSearch={ratingSearch}
      />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MoviesAdd addNewMovie={addNewMovie} />
      </div>
  </div>
    
  );
}

export default App;
