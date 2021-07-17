
import Agenda from './Agenda';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="Text">Bienvenido a su agenda en React</p>
        <p className="Text">Aqui puede ver y agregar contacto</p> 
        <Agenda/>
      
      </header>
    </div>
  );
}


export default App;
