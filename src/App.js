import React from 'react';
import './App.css';
import Game from './tiktaktoe/game.js';

const App = function () {
  return (
    <div className="app">
      <header>Tik-Tak-Toe</header>
      <Game
        player1={{name: 'rashmi', symbol: 'X'}}
        player2={{name: 'riya', symbol: 'O'}}
      />
    </div>
  );
};

export default App;
