/* eslint-disable react/prop-types */
import React from 'react';
import {IMAGE_URL} from '../utils/constants';
import '../styles/home.css';

const Movie = ({ data }) => {
    return (
      <div className="movie">
       <img src={`${IMAGE_URL}${data?.poster_path}`}></img>
      </div>
    )
  }
  
export default Movie;