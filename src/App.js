import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Figura from './components/Figura';
import LetrasErradas from './components/LetrasErradas';
import Palabra from './components/Palabra';

const palabras = ['application', 'programming', 'interface', 'wizard'];
let palabraElegida = words[Math.floor(Math.random() * words.length)];

function App() {
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
