import React from 'react';
import './App.css';
import Game from './tiktaktoe/game.js';

const App = function () {
  return (
    <div className="app">
      <header>Tik-Tak-Toe</header>
      <Game
        player1={{name: 'Player1', symbol: 'X'}}
        player2={{name: 'Player2', symbol: 'O'}}
      />
    </div>
  );
};

export default App;
