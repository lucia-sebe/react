import React from 'react';
import '../styles/planBar.css';
import imgInCancel from '../ images/imgInCancel.png';
function HomeCancel(){
    return(
    <div className="homeCancel">

        <div className="titleCancel">
            <p id='cancelText'>Si piensas que Movy no es lo tuyo, no hay problema. Sin compromisos. <br></br>Cancela online cuando quieras.</p>
            <a id='mesGratis'>DISFRUTAR UN MES GRATIS</a>
        </div>   

        <div className="imagenCancel">
            <img id='imgInCancel' src={imgInCancel}></img>
        </div>

    </div>
    )
}

export default HomeCancel;