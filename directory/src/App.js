import './App.css';
import React from 'react';
import Flashcards from './Components/Flashcards';


function App() {
  return (
    <div className="App">
      <section className="home-row">
      <h1 className="home-text">Home</h1>
      </section>
      <Flashcards/>
    </div>
  );
}

export default App;
