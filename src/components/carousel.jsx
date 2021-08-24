/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from 'react';
import '../styles/home.css';
import { Poster_path } from "./movie.jsx";

const Carousel = ({ data, name }) => {
  return (
  
    <div className="carouselBox">
       
       <h1 id='title'>{name}</h1>
   
      <div  className="carousel">
        {data?.map((poster_path) => <Poster_path data={poster_path}/>)}
      </div>

    </div>
  
  )
}

export default Carousel;
