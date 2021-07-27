import React from 'react';
import '../styles/main.css';
import MovyLogo from '../ images/movylogo.png';

function Main(){
  return (
    <main className="fondo">
      <header className="encabezado">
        <div className="pageName">
           <img src={MovyLogo}></img>
        </div>

        <div className="access"> 
           <a>Register</a>
           <a id="login">Login</a>
        </div>
      </header>

      <div className="bienvenida">
         <h1 id="mejorCine">El mejor cine online</h1>
         <p id="disfurta">DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS.</p>
         <a id="pruebaAhora">PRUEBA AHORA</a>
      </div>
    </main>
    )
}

export default Main;