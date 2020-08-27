import React from 'react';

const Tile = function ({onClick, value, id}) {
  return (
    <button
      disabled={value ? true : false}
      className="tile"
      onClick={() => onClick(id)}
    >
      {value || id}
    </button>
  );
};

export default Tile;
