import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Personagens from "./Components/PersonagemSec/Personagens";
import AboutGame from "./Components/AboutGame";
import Weapons from "./Components/Weapons";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Personagens/>
      <AboutGame/>
      <Weapons/>
    </div>
  );
}

export default App;
