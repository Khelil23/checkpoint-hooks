import React from 'react'
import MoviesCard from './MoviesCard'

const MoviesList = (props) => {
    console.log("props : ", props)
    return(
        <div>
            {props.moviesList.map((el,i)=>(
                <MoviesCard key ={i} el ={el}/>
                ))}         
            
        </div>
    )
}
export default MoviesList;