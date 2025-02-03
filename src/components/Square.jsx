/* eslint-disable react/prop-types */
import { useContext } from 'react';
import GlobalContext from '../globalContext';

export default function Square({ value, index }) {
  //variabile che indica il valore di ogni quadrato
  // const [value, setValue] = useState(null)

  const { squares, setSquares, xIsNext, setXIsNext } =
    useContext(GlobalContext);

  function handleClick(i) {
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
    // nextSquares[i] = 'X';

    //aggiorna lo stato del componente
    setSquares(nextSquares);
  }

  return (
    <button onClick={() => handleClick(index)} className="square">
      {value}
    </button>
  );
}
