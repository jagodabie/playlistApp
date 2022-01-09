import React,{ useState } from "react";
import './App.css';
import Navigation from './components/Navigation';
import Playlist from './components/Playlist';
import Search  from './components/Search';

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  return (
    <div className="App">
      <header>
        <Navigation/>
      </header>
      <main> 
        <Playlist playlist={playlist} setPlaylist={setPlaylist} />
        <Search setPlaylist={setPlaylist} playlist={playlist} />
      </main>
    </div>
  );
}

export default App;
