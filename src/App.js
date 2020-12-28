import React, {useState} from 'react';
import {moviesHome} from './Components/MoviesHome'
import MoviesList from './Components/MoviesList'
import MoviesAdd from './Components/MoviesAdd'
import './App.css';

function App() {
  const [moviesList,setMoviesList]= useState(moviesHome)
  return (
  <div>
    <MoviesList  moviesList = {moviesList}/>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <MoviesAdd/>
      </div>
  </div>
    
  );
}

export default App;
