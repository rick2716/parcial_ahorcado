import React from 'react'
//Letras Erradas
const LetrasErradas = ({ letrasErradas }) => {

  return (
    <div className="letras-erradas-container">
      <div>
        {letrasErradas.length > 0 && 
          <p>Errada</p>
        }
        {letrasErradas
          .map((letra, i) => <span key={i}>{letra}</span>)
          .reduce((ant, act) => ant === null ? [act] : [ant, ', ', act], null)}
      </div>
    </div>
  )
}

export default LetrasErradas