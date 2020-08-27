import React from 'react';
import GameBoard from './gameBoard';
import Status from './status';
import Restart from './restart';

const hasWon = function (tiles, currentPlayerSymbol) {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  return winningCombinations.some((combination) =>
    combination.every((index) => tiles[index] === currentPlayerSymbol)
  );
};

const hasDrawn = function (tiles) {
  return tiles.every((tile) => tile);
};

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPlayer: props.player1,
      nextPlayer: props.player2,
      tiles: Array(9).fill(null),
      hasDrawn: false,
      winner: null,
    };
    this.handlerClick = this.handlerClick.bind(this);
    this.resetDefault = this.resetDefault.bind(this);
  }

  handlerClick(tileId) {
    this.setState(({tiles, currentPlayer, nextPlayer}) => {
      const newTiles = tiles.slice();
      newTiles[tileId] = currentPlayer.symbol;

      if (hasDrawn(newTiles)) {
        return {tiles: newTiles, hasDrawn: true};
      }

      if (hasWon(newTiles, currentPlayer.symbol)) {
        return {tiles: newTiles, winner: currentPlayer.name};
      }

      return {
        tiles: newTiles,
        currentPlayer: nextPlayer,
        nextPlayer: currentPlayer,
      };
    });
  }

  resetDefault() {
    this.setState(() => ({
      currentPlayer: this.props.player1,
      nextPlayer: this.props.player2,
      tiles: Array(9).fill(null),
      hasDrawn: false,
      winner: null,
    }));
  }

  render() {
    const {tiles, currentPlayer, winner, hasDrawn} = this.state;
    return (
      <div>
        <Status
          currentPlayerName={currentPlayer.name}
          hasDrawn={hasDrawn}
          winner={winner}
        />
        <GameBoard
          onClick={this.handlerClick}
          tiles={tiles}
          isGameOver={hasDrawn || winner}
        />
        <Restart onClick={this.resetDefault} />
      </div>
    );
  }
}

export default Game;
