import React from 'react';
import '../styles/planBar.css';
import Tv from '../ images/TV.png'; 
import Cambiar from '../ images/cambiar.png';
import imgInCancel from '../ images/imgInCancel.png'
function HomeDispositivos(){
    return(
    <div className="homeDispositivos">

        <header className="titleDispositivos">
            <p id='dispositivosText'>Ve películas y programas de TV cuando y donde quieras, <br></br> personalizados para ti.</p>
            <a id='mesGratis'>DISFRUTAR UN MES GRATIS</a>
        </header>   

        <div className="imagenesDispositivos">
           <img id='tv' src={Tv}></img>
           <img id='cambiar' src={Cambiar}></img>
           <img id='imgCancel' src={imgInCancel}></img>
        </div>

        <div className="textDispositivos">
            <p>Ve Movy en tu TV.</p>
            <p>Smart TV, PlayStation, Xbox, Roku, Apple TV, <br></br>reproductores de Blu-Ray y más.</p>
       
            <p>Disfruta al instante o descarga videos para más tarde</p>
            <p>Disponible en tu teléfono o tablet, vayas donde vayas.</p>

            <p>Usa cualquier computadora.</p>
            <p>Ve directamente en Movy.com.</p>
        </div>
    </div>
    )
}

export default HomeDispositivos;