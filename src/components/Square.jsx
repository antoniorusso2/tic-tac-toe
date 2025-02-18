/* eslint-disable react/prop-types */
import { useContext } from 'react';
import GlobalContext from '../globalContext';
import X from './X';
import O from './O';

export default function Square({ value, index }) {
  //variabile che indica il valore di ogni quadrato
  // const [value, setValue] = useState(null)

  const { squares, setSquares, xIsNext, setXIsNext, calculateWinner } = useContext(GlobalContext);

  function handleClick(i) {
    //se il quadrato è già stato cliccato o se il simbolo risulta vincente, non faccio nulla
    if (squares[i] || calculateWinner(squares)) return;

    //gestione players turn
    setXIsNext(!xIsNext);

    //copia dell'array di sezioni dove poter inserire il simbolo
    const nextSquares = squares.slice();

    //determina il simbolo da inserire
    if (xIsNext) {
      nextSquares[i] = 'X';
    } else {
      nextSquares[i] = 'O';
    }

    console.log(squares, nextSquares);

    //imposta il valore del quadrato cliccato

    //aggiorna lo stato del componente
    setSquares([...nextSquares]);
  }

  return (
    <button onClick={() => handleClick(index)} className="square">
      {value === 'X' ? <X /> : value === 'O' ? <O /> : null}
    </button>
  );
}
