import React , {useState} from 'react';
import '../styles/planBar.css';
import Shape from '../ images/shape1.png';
import Cancel from '../ images/cancel.png';
import Dispositivos from'../ images/dispositivos.png';
import HomePrice from './homePrice';
import HomeCancel from './homeCancel';
import HomeDispositivos from './homeDispositivos';

function PlanBar(){
    let [planBarState, setPlanBarState] = useState('');
    
    function cargarSeccion(){
        if (planBarState == 'price') {
            return(
                <HomePrice/>
            )
        }
        if (planBarState == 'cancel') {
            return(
                <HomeCancel/>
            )
        }
        if (planBarState == 'dispositivos'){
            return(
                <HomeDispositivos/>
            )
        }
   
     }
    return (
    <>
    <main className="fondo2">

        <header className="opciones">
            <div className="options">
            <button className="price" onClick= {()=>{setPlanBarState('price')} }>
                <img src={Shape}></img>
            </button>
            <button className="cancel" onClick= {()=>{setPlanBarState('cancel')} }>
                <img src={Cancel}></img>       
            </button>
            <button className="dispositivos" onClick= {()=>{setPlanBarState('dispositivos')} }> 
            <img src={Dispositivos}></img>       
            </button>
            </div>
        </header>
    </main>
    {cargarSeccion()}
    </>
    )
}

export default PlanBar;