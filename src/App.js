/* eslint-disable react/react-in-jsx-scope */

import './App.css';
import React, { useState, useEffect } from 'react';
import { getAllMovies } from './api/movies';

function movie() {

   const [movies, setMovies] = useState ([]);

    useEffect(() => {
      getAllMovies.then((response) => {
        setMovies(response.results)
      })
    })

    return(
      <div className="text">
        <header>

          <h1>Bienvenido!</h1>

         <ul>
            {movies && movies.map((item) => {
              return <li key={ item.id }> { item.original_title } </li>
             })
            }
         </ul>

        </header>
      </div>
    );
   
}

export default movie;