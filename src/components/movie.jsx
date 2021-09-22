/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { IMAGE_URL } from '../utils/constants';
import '../styles/home.css';

export const Poster = ({ data }) => {
    return (
      <Link to={`/trailerMovie/${data.id}`}>
      <div className="poster">
        <img src={ `${IMAGE_URL}${data?.poster_path}` }></img>
      </div>
      </Link>
    )
  }
