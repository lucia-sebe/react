import React from 'react';
import { Poster } from "./movieBackdrop.jsx";
import PropTypes from 'prop-types';
import '../styles/home.css';

const CarouselSimilar = ({ data, name }) => {
  return (

    <div className="carouselBox">
      <h1 id='title'>{name}</h1>

      <div className="carousel flex flex-wrap">
        {data?.map((backdrop_path) => <Poster key={data.id} data={backdrop_path} />)}
      </div>
    </div>

  )
}

CarouselSimilar.propTypes = {
  data: PropTypes.array,
  name: PropTypes.string,
}
export default CarouselSimilar;
