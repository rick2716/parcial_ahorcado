import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Figura from './components/Figura';
import LetrasErradas from './components/LetrasErradas';
import Palabra from './components/Palabra';
import { useState } from 'react';

const palabras = ['application', 'programming', 'interface', 'wizard'];
let palabraElegida = words[Math.floor(Math.random() * words.length)];

function App() {
  const [playable, setPlayable] = useState(true);
  const [letrasCorrectas, setLetrasCorrectas] = useState([]);
  const [letrasIncorrectas, setLetrasIncorrectas] = useState([]);

  return (
    <div className="App">
      <Header />
      <div className='contenedor'>
        <Figura />
        <LetrasErradas />
        <Palabra />
      </div>
    </div>
  );
}

export default App;
