import React from 'react';

 
    
    const MoviesCard = ({
      movie: { name, date, image, type},
    }) => {
    return (
        <div>
      <div >
        <img src={image} alt="poster" />
      </div>
      <div>
        <h1>{name}</h1>
        <div>
          <ul>
            <li>{date}</li>
            <li>||</li>
            <li>{type}</li>
          </ul>
        </div>
       
        <div>
           
          <a href="https://www.imdb.com/?ref_=nv_home">Read More</a>
        </div>
        <div>
          <a href="https://www.imdb.com/?ref_=nv_home">WATCH TRAILER</a>
        </div>
      </div>
    </div>
    )
}
export default MoviesCard;
