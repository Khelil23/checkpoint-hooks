import React from 'react';

const MoviesCard = ({el}) => {
    /*console.log("el image : ", el.image)
    const iAmLegende = require("../" + el.image)
    console.log(iAmLegende)*/
  
    return (
        <div  style={
            {display: 'flex', marginTop: '10px', justifyContent: 'space-around',}
        }>
      <div >
        <img src={el.image} alt="poster" />
      </div>
      <div>
        <h1>{el.name}</h1>
        <div>
          <ul>
            <li>{el.date}</li>
            <li>||</li>
            <li>{el.type}</li>
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
