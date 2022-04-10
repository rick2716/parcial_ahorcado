import './App.css';
import Header from './components/Header';
import Figura from './components/Figura';
import LetrasErradas from './components/LetrasErradas';
import Palabra from './components/Palabra';
import Popup from './components/Popup';
import Notificacion from './components/Notificacion';
import {mostrarNotificacion as mostrar} from './components/controladores/controladores';
import { useEffect, useState } from 'react';


const palabras = ['application', 'programming', 'interface', 'wizard'];
let palabraElegida = palabras[Math.floor(Math.random() * palabras.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [letrasCorrectas, setLetrasCorrectas] = useState([]);
  const [letrasErradas, setLetrasErradas] = useState([]);
  const [mostrarNotificacion, setMostrarNotificacion] = useState(false);

  useEffect(() => {
    const handleTeclado = event => {
      const { key, keyCode } = event;

      if(playable && keyCode >= 65 && keyCode <= 90){
        const letra = key.toLowerCase();

        if(palabraElegida.includes(letra)){
          if(!letrasCorrectas.includes(letra)){
            setLetrasCorrectas(letrasActuales => [...letrasActuales, letra]);
          } else {
            mostrar(setMostrarNotificacion);
          }
        } else {
          if(!letrasErradas.includes(letra)){
            setLetrasErradas(letrasErradas => [...letrasErradas, letra])
          } else {
            mostrar(setMostrarNotificacion);
          }
        }
      }
    }

    window.addEventListener('keydown', handleTeclado);

    return () => window.removeEventListener('keydown', handleTeclado);
  }, [letrasCorrectas, letrasErradas, playable]);

  function reintentar(){
    setPlayable(true);

    setLetrasCorrectas([]);
    setLetrasErradas([]);

    const aleatoreo = Math.floor(Math.random() * palabras.length);
    palabraElegida = palabras[aleatoreo];
  }

  return (
    <div className="App">
      <Header />
      <div className='contenedor'>
        <Figura letrasErradas={letrasErradas} />
        <LetrasErradas letrasErradas={letrasErradas}/>
        <Palabra palabraElegida={palabraElegida} letrasCorrectas={letrasCorrectas} />
      </div>
      <Popup letrasCorrectas={letrasCorrectas} letrasErradas={letrasErradas} palabraElegida={palabraElegida}
      setPlayable={setPlayable} reintentar={reintentar} />
      <Notificacion mostrarNotificacion={mostrarNotificacion} />
    </div>
  );
}

export default App;
