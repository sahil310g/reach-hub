import './App.css';
import GameDetail from './pages/GameDetail';
import GameList from './pages/GameList';
import bg from './assets/bg.jpeg';

function App() {
  return (
    <>
      {/* <img src={bg} alt="" /> */}
    <div className="App">
      <div className="bgImage"></div>
      
      {/* <GameList/> */}
      <GameDetail/>

    
    </div>
    </>
  );
}

export default App;
