import React from 'react';
import Tile from './tile.js';

const GameBoard = function ({onClick, tiles, isGameOver}) {
  const tileList = tiles.map((value, index) => (
    <Tile value={value} key={index} id={index} onClick={onClick} />
  ));

  const className = isGameOver ? 'gameBoard disable' : 'gameBoard';
  return <div className={className}>{tileList}</div>;
};

export default GameBoard;
