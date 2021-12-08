import logo from './logo.svg';
import './App.css';
import { Prueba } from './componente/Prueba';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Prueba/>
      </header>
    </div>
  );
}

export default App;
