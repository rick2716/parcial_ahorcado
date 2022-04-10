import './App.css';
import Header from './components/Header';
import Figura from './components/Figura';
import LetrasErradas from './components/LetrasErradas';
import Palabra from './components/Palabra';
import { useEffect, useState } from 'react';

const palabras = ['application', 'programming', 'interface', 'wizard'];
let palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [letrasCorrectas, setLetrasCorrectas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);

  useEffect(() => {
    const handleTeclado = event => {
      const { key, keyCode } = event;

      if(playable && keyCode >= 65 && keyCode <= 90){
        const letra = key.toLowerCase();

        if(palabraElegida.includes(letra)){
          if(!letrasCorrectas.includes(letra)){
            setLetrasCorrectas(letrasActuales => [...letrasActuales, letra]);
          } else {
            // mostrarNotificacion();
          }
        } else {
          if(!letrasErradas.includes(letra)){
            setLetrasErradas(letrasErradas => [...letrasErradas, letra])
          } else {
            // mostrarNotificacion();
          }
        }
      }
    }

    window.addEventListener('keydown', handleTeclado);

    return () => window.removeEventListener('keydown', handleTeclado);
  }, [letrasCorrectas, letrasErradas, playable]);

  return (
    <div className="App">
      <Header />
      <div className='contenedor'>
        <Figura />
        <LetrasErradas letrasErradas={letrasErradas}/>
        <Palabra palabraElegida={palabraElegida} letrasCorrectas={letrasCorrectas} />
      </div>
    </div>
  );
}

export default App;
