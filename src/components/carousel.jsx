import React from 'react';
import { Poster } from "./movie.jsx";
import PropTypes from 'prop-types';

import '../styles/home.css';

const Carousel = ({ data, name }) => {
  return (
  
    <div className="carouselBox">
       
       <h1 id='title'>{name}</h1>
   
      <div  className="carousel">
        {data?.map((poster_path) => <Poster key={data.id} data={poster_path}/>)}
      </div>

    </div>
  
  )
}

Carousel.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
}
export default Carousel;
