import React, { useState, useEffect } from 'react';
import Footer from '../components/footer';
import Carousel from '../components/carousel';
import { getPopularMovies, getRecommended, getTopRated } from '../api/movies';
import { getRandomNumber } from '../utils/constants';
import Highlight from '../components/highlight';
import '../styles/home.css';

function Home(){
    
    const [backgroundImage, setBackgroundImage] = useState();
  
    const [popularMovies, setPopularMovies] = useState([]);
    useEffect(() => {
      getPopularMovies()
        .then((response) => {
          setPopularMovies(response.results);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      }, []);

    const [recommended, setRecommended] = useState([]);
    useEffect(() => {
      getRecommended()
        .then( (response ) => {
          setRecommended(response.results);
          setBackgroundImage( response.results[getRandomNumber(response.results.length)])
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      }, []);

    const [topRated, setTopRated] = useState([]);
    useEffect(() => {
      getTopRated()
        .then((response) => {
          setTopRated(response.results);
        })
        .catch((error) => {
          console.log("Error: ", error);
        });
      }, []);

    return(
        <main>
            {backgroundImage && <Highlight
            movie={backgroundImage}
            />}

            <div className="listas">

                 <Carousel 
                     data={ popularMovies }
                     name="Popular on Movy"
                 />
                
                 <Carousel 
                     data={ topRated }
                     name="Top Rated"
                 />
                
                 <Carousel 
                     data={ recommended }
                     name="Recommended movies"
                 />

            </div>

            <Footer/>
        </main>
    )
}

export default Home;
