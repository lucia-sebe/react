/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import Highlight from '../components/highlight';
import { fetchPopularMovie, fetchRecommendedMovie, fetchTopRatedMovie, setBackgroundImage } from '../Redux/movieSlice';
import '../styles/home.css';
import { getRandomNumber } from '../utils/constants';

function Home() {

    const loading = useSelector((state) => state.movie.loading);
    const popular = useSelector((state) => state.movie.popular);
    const topRated = useSelector((state) => state.movie.topRated);
    const recommended = useSelector((state) => state.movie.recommended);
    const backgroundMovie = useSelector((state) => state.movie.backgroundImage);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchPopularMovie())
        dispatch(fetchRecommendedMovie())
        dispatch(fetchTopRatedMovie())
    }, []);

    useEffect(() => {
        dispatch(setBackgroundImage(recommended[getRandomNumber(recommended.length)]))
    }, [recommended]);

    return (
        <main>
            {backgroundMovie && <Highlight
                movie={backgroundMovie}
            />}

            {loading && <h1>loading</h1>}
            
            <div className="listas">

                <Carousel
                    data={popular}
                    name="Popular on Movy"
                />

                <Carousel
                    data={topRated}
                    name="Top Rated"
                />

                <Carousel
                    data={recommended}
                    name="Recommended movies"
                />

            </div>

            <Footer />
        </main>
    )
}

export default Home;
