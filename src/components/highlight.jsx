import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { IMAGE_URL } from '../utils/constants';
import { getMovieDetails } from '../api/movies';
import Navbar from '../components/navbarHome';
import '../styles/highlight.css';

const Highlight = ({ movie }) => {

    const [movieDetails, setMovieDetails] = useState(null);

    useEffect(() => {
        getMovieDetails(movie.id)
            .then((response) => {
                setMovieDetails(response);
            })
    }, []);

    return (
        <>

            <div className="w-screen h-screen bg-cover" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>
                <Navbar />
                <div className="movieDetails my-20 mx-80">
                    <p className="dateAndGenres p-0">{movieDetails?.release_date.slice(0, 4)} - {movieDetails?.genres.map((item) => `${item.name} `)}</p>
                    <h1 className="text-5xl my-9">{movieDetails?.title}</h1>
                    <p className="runtime w-16 p-2 rounded-lg">{movieDetails?.runtime} m</p>
                    <p className="p-0 my-8 mx-0 text-4xl leading-normal">{movieDetails?.overview}</p>
                </div>
            </div>
        </>
    )
}

Highlight.propTypes = {
    movie: PropTypes.object,
}

export default Highlight;
