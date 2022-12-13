import logo from './logo.svg';
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";
import Personagens from "./Components/Personagens";

function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Personagens/>
    </div>
  );
}

export default App;
