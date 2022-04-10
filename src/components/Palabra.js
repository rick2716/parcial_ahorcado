import React from 'react';
// Verificacion de las palabras
const Palabra = ({ palabraElegida, letrasCorrectas }) => {

  return (
    <div className="palabra">
      {palabraElegida.split('').map((letter, i) => {
        return (
          <span className="letra" key={i}>
            {letrasCorrectas.includes(letra) ? letra : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Palabra
