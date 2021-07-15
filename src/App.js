/* eslint-disable react/react-in-jsx-scope */

import './App.css';
import React, { useState, useEffect } from 'react';
import { getAllMovies } from './api/movies';

function Movie() {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        getAllMovies.then((response) => {
            setMovies(response.results)
        })
    })

    return ( <
        div className = "text" >
        <
        header >

        <
        h1 > Bienvenido! < /h1>

        <
        ul > {
            movies == undefined ? < p > hola < /p> : movies.map((item) => {
            return <li key = { item.id } > { item.original_title } < /li>
        })
} <
/ul>

<
/header> <
/div>
);
}

export default Movie;