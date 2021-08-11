/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import Movie from "./movie.jsx";
import React from 'react';
import '../styles/home.css';

const Carousel = ({ data, name }) => {
  return (
  
    <div className="carouselBox">
       
       <h1 id='title'>{name}</h1>
   
      <div  className="carousel">
        {data?.map((movie) => <Movie data={movie}/>)}
      </div>

    </div>
  
  )
}

export default Carousel;