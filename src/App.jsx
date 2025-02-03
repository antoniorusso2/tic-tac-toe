import { useState } from 'react';
import './App.css';
import Square from './components/Square';
import GlobalContext from './globalContext';

function Board() {
  //variabile che indica il valore di ogni quadrato per stabilire poi un vincitore
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  return (
    <GlobalContext.Provider
      value={{ squares, setSquares, xIsNext, setXIsNext }}
    >
      <div className="container">
        <div className="row">
          <div className="board">
            {squares.map((square, i) => (
              <Square key={i} index={i} value={square} />
            ))}
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default Board;
