import React from 'react';
// Verificacion de las palabras
const Palabra = ({ selectedPalabra, correctLetras }) => {

  return (
    <div className="palabra">
      {selectedPalabra.split('').map((letter, i) => {
        return (
          <span className="letra" key={i}>
            {correctLetras.includes(letra) ? letra : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Palabra
