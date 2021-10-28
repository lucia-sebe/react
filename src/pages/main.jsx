import React from 'react';
import MovyLogo from '../ images/movylogo.png';
import PlanBar from '../components/planBar';
import Footer from '../components/footer'
import { LoginButton } from "../components/login";

function Main() {

  return (
    <>
      <main className="fondo">
        <header className="encabezado">
          <div className="pageName">
            <img src={MovyLogo}></img>
          </div>

          <div className="access">
            <a>Register</a>
            <LoginButton id="login" />
          </div>
        </header>

        <div className="bienvenida">
          <h1 id="mejorCine">El mejor cine online</h1>
          <p id="disfurta">DISFRUTA DONDE QUIERAS. CANCELA CUANDO QUIERAS.</p>
          <a id="pruebaAhora">PRUEBA AHORA</a>
        </div>
      </main>
      <PlanBar />
      <Footer />
    </>
  )
}

export default Main;
