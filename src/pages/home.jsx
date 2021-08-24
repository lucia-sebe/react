import React, { useState, useEffect } from 'react';
import '../styles/home.css';
import Footer from '../components/footer';

import Carousel from '../components/carousel';
import { getPopularMovies, getRecommended, getTopRated } from '../api/movies';
import { getRandomNumber } from '../utils/constants';
import Highlight from '../components/highlight'

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
                  
                {/* 
                    <div className="presentacionGrande">
                         <div className="imagen">

                         </div>

                         <div className="descripcion">

                         </div>
                    </div>
                */}

            </div>

            <Footer/>
        </main>
    )
}

export default Home;
