import './App.css';
import GameDetail from './pages/GameDetail';
import GameList from './pages/GameList';
import bg from './assets/bg.jpeg';
import AutoComplete from './pages/AutoComplete';
import Header from './components/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      {/* <img src={bg} alt="" /> */}
    <div className="App">
      <div className="bgImage"></div>
      
      <GameList/>
      <GameDetail/>
      <AutoComplete/>

    
    </div>
    </>
  );
}

export default App;
