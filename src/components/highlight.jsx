import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../utils/constants';
import { getMovieDetails } from '../api/movies';
import Navbar from '../components/navbarHome';
import '../styles/highlight.css';


const Highlight = ({movie})  => {
    
    const [movieDetails , setMovieDetails] = useState (null);
    
    useEffect(() => {
        getMovieDetails(movie.id)
        .then((response) => {
            setMovieDetails(response);
        })
    }, []);
            
    return(
        <>

            <div className="fondoHome" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>
            <Navbar/>
                <div className="movieDetails">
                        <p id='dateAndGenres'>{movieDetails?.release_date.slice(0,4)} - {movieDetails?.genres.map((item) => `${item.name} `) }</p>
                        <h1 id="movieTitle">{movieDetails?.title}</h1>
                        <p id='runtime'>{movieDetails?.runtime} m</p>
                        <p id='overview'>{movieDetails?.overview}</p>
                </div>
            </div>
        </>
    )
}

Highlight.propTypes = {
    movie: PropTypes.object, 
}

export default Highlight;
