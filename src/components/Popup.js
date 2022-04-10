import React, { useEffect } from 'react'
import { ganador } from './controladores/controladores';

const Popup = ({letrasCorrectas, letrasErradas, palabraElegida, setPlayable, reintentar}) => {
    let mensajeFinal = "";
    let palabraMostrada = "";
    let playable = true;

    if (ganador(letrasCorrectas, letrasErradas, palabraElegida) === 'ganaste') {
        mensajeFinal = '¡Felicidades, Has Ganado!';
        playable = false;
    } else if (ganador(letrasCorrectas, letrasErradas, palabraElegida) === 'perdiste'){
        mensajeFinal = 'Lastima, Perdiste... ¡Vuelvelo a intentar!';
        palabraMostrada = `La palabra era : ${palabraElegida}`;
        playable = false;
    }

    useEffect(() => setPlayable(playable));

    return (
        <div className='popup-container' style={mensajeFinal !== '' ? {display:'flex'} : {} }>
            <div className='popup'>
                <h2>{mensajeFinal}</h2>
                <h3>{palabraMostrada}</h3>
                <button onClick={reintentar} >Reiniciar</button>
            </div>
        </div>
    );
};

export default Popup;