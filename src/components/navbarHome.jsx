import React from 'react';
import MovyLogo from '../ images/movylogo.png';
import Lupa from '../ images/lupa.png';
import Flechita from '../ images/flechita.png'
import FotoPerfil from'../ images/fotoPerfil.png';

function Navbar(){
    return (
        <div className="topBar">
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
        </div>
    )
}

export default Navbar;
