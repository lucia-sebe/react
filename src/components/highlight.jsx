import React, { useState, useEffect } from 'react';
import '../styles/highlight.css';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../utils/constants';
import { getMovieDetails } from '../api/movies';

import MovyLogo from '../ images/movylogo.png';
import Lupa from '../ images/lupa.png';
import Flechita from '../ images/flechita.png'
import FotoPerfil from'../ images/fotoPerfil.png';


const Highlight = ({movie})  => {
    
    const [movieDetails , setMovieDetails] = useState (null);
    
    useEffect(() => {
        getMovieDetails(movie.id)
        .then((response) => {
            setMovieDetails(response);
        })
    }, []);
            
    return(
        <div className="fondoHome" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>

            <header className="topBar">
                <div className="topBarLeft">
                    <img src={ MovyLogo }></img>
                    <div>
                        <a>Home</a>
                        <a>Movies</a>
                        <a>Series</a>
                        <a>Recently Added</a>
                        <a>My List</a>
                    </div>
                </div>

                <div className="topBarRight">
                    <img id='lupa' src={Lupa}></img>
                    <img id='fotoPerfil' src={FotoPerfil}></img>
                    <img id="flechita" src={Flechita}></img>
                </div>
            </header>

            <div className="movieDetails">
                    <p id='dateAndGenres'>{movieDetails?.release_date.slice(0,4)} - {movieDetails?.genres.map((item) => `${item.name} `) }</p>
                    <h1 id="movieTitle">{movieDetails?.title}</h1>
                    <p id='runtime'>{movieDetails?.runtime} m</p>
                    <p id='overview'>{movieDetails?.overview}</p>
            </div>
        </div>
    )
}

Highlight.propTypes = {
    movie: PropTypes.object, 
}

export default Highlight;
