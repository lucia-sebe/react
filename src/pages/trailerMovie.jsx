import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import { IMAGE_URL } from '../utils/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { fetchSimilarMovies, fetchMovieDetails } from '../Redux/movieSlice';
import CarouselBackdrop from '../components/caruselBackdrop';
import '../styles/trailerMovie.css';

function TrailerMovie() {

    let { id } = useParams();
    const similarMovies = useSelector(state => state.movie.similarMovies);
    const movieDetails = useSelector(state => state.movie.movieDetails);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchSimilarMovies(id))
        dispatch(fetchMovieDetails(id))
    }, []);

    return (
        <div>
            <div className="w-screen h-screen bg-cover" style={{ backgroundImage: `url(${IMAGE_URL}${movieDetails?.backdrop_path})` }}>
                <FontAwesomeIcon icon={faTimesCircle} size="2x" className="cursor-pointer" />
            </div>

            <div className="infromation flex w-full">
                <div className="w-3/5">
                    <p className="p-0">{movieDetails?.release_date?.slice(0, 4)} {movieDetails?.runtime} m</p>
                    <p className="p-0">{movieDetails?.overview}</p>
                </div>

                <div className="justify-end w-2/5">
                    <p>Cast: {movieDetails?.credits?.cast?.map((item) => `${item.name} , `)}</p>
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
