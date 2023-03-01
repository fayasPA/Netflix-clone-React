import React from 'react';
import './App.css';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';
import Rowpost from './components/RowPost/Rowpost';
import { action, originals } from './urls';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Rowpost url={originals} title='Netflix Originals' />
      <Rowpost url={action} title='Action' isSmall />
    </div>
  );
}

export default App;
