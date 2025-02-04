import { useState } from 'react';
import './App.css';
import Square from './components/Square';
import GlobalContext from './globalContext';

function Board() {
  //variabile che indica il valore di ogni quadrato per stabilire poi un vincitore
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  //imposto uno status informativo sullo stato della partita
  let status;

  const winner = calculateWinner(squares); //dichiarazione vincitore

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  //restart game
  function restartGame() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

  return (
    <GlobalContext.Provider value={{ squares, setSquares, xIsNext, setXIsNext, calculateWinner }}>
      <div className="container">
        <div className="row">
          <h1 className="title">Tic Tac Toe</h1>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="status">{status}</div>
        </div>
      </div>
      <div className="container">
        <div className="row play-field">
          <div className="board">
            {squares.map((square, i) => (
              <Square key={i} index={i} value={square} />
            ))}
          </div>
          {/* reset btn */}
          <div className="btn-wrap">
            <button onClick={restartGame} className="restart btn-grad">
              Restart
            </button>
          </div>
        </div>
      </div>
    </GlobalContext.Provider>
  );
}

export default Board;

function calculateWinner(squares) {
  //possibili combinazioni per vincere
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  //scorro tutte le combinazioni per vedere se ci sono 3 simboli uguali
  for (let i = 0; i < lines.length; i++) {
    // console.log(lines);
    //prendo le 3 posizioni
    const [a, b, c] = lines[i];
    //se ci sono 3 simboli uguali ritorno il simbolo
    console.log(squares[a], squares[b], squares[c]);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
