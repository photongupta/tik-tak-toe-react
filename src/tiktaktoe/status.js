import React from 'react';

const Status = function ({winner, hasDrawn, currentPlayerName}) {
  let status = `${currentPlayerName}'s turn`;
  if (winner) {
    status = `${winner} won the game`;
  }
  if (hasDrawn) {
    status = 'Game draw';
  }
  return <p className="status">{status}</p>;
};

export default Status;
