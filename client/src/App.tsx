import React from 'react';
import './App.css';
import CharacterSheet from './components/CharacterSheet';
import {NavBar} from './components/NavBar/NavBar';


function App() {
  return (
    <>
      <NavBar></NavBar>
      <CharacterSheet></CharacterSheet>
    </>
  );
}

export default App;
