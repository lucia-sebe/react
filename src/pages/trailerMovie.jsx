import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSimilarMovies, fetchMovieDetails } from '../Redux/movieSlice';
import { getTrailerMovie } from '../api/movies';
import MovyLogo from '../ images/movylogo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import CarouselBackdrop from '../components/caruselBackdrop';
import "../styles/trailerMovie.css";

function TrailerMovie() {

    let { id } = useParams();
    const [trailerMovie, setTrailerMovie] = useState([]);
    const trailer = `https://www.youtube.com/embed/${trailerMovie[0]?.key}?controls=0&autoplay=1`;
    const similarMovies = useSelector(state => state.movie.similarMovies);
    const movieDetails = useSelector(state => state.movie.movieDetails);
    const dispatch = useDispatch();
    
    useEffect(() => {
        dispatch(fetchSimilarMovies(id))
        dispatch(fetchMovieDetails(id))
        getTrailerMovie(id)
            .then((response) => {
                setTrailerMovie(response.results);
            })
    }, []);

    return (
        <div className="bg-black">
            <div className="flex justify-between mb-4">
                <img src={MovyLogo} className="w-24 m-4"></img>
                <Link to='/home'>
                    <FontAwesomeIcon icon={faArrowLeft} size="2x" className="arrow mr-20 mt-4 cursor-pointer" />
                </Link>
            </div>
            <div className="w-screen h-screen">

                <iframe width='100%' height='100%”'
                    src={trailer}
                    title='YouTube video'
                    allow="autoplay; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>

            <div className="text-white flex w-full ">
                <div className="w-3/5">
                    <p className="p-0">{movieDetails?.release_date?.slice(0, 4)} {movieDetails?.runtime} m</p>
                    <p className="p-0">{movieDetails?.overview}</p>
                </div>

                <div className="justify-end w-2/5">
                    <p>Cast: {movieDetails?.credits?.cast?.slice(0, 4).map((item) => ` ${item.name}`) + " and more"}</p>
                    <p>Genres: {movieDetails?.genres?.map((item) => `${item.name}  `)}</p>
                </div>
            </div>

            <div>
                <CarouselBackdrop
                    data={similarMovies}
                    name="More like this"
                />
            </div>
        </div>
    )
}

export default TrailerMovie;
