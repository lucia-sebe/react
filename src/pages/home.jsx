import React, { useState, useEffect }from 'react';
import '../styles/home.css';
import Footer from '../components/footer';

import MovyLogo from '../ images/movylogo.png';
import Lupa from '../ images/lupa.png';
import Flechita from '../ images/flechita.png'
import FotoPerfil from'../ images/fotoPerfil.png';

import Carousel from '../components/carousel';
import { getPopularMovies, getRecommended, getTopRated } from '../api/movies';

function Home(){

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
      .then((response) => {
        setRecommended(response.results);
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

            <div className="fondoHome">

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

            </div>

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