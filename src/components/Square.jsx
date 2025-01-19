/* eslint-disable react/prop-types */
/**
 * Square is a functional component that renders a button with a number.
 * When the button is clicked, it logs the number to the console.
 *
 * @param {Object} props - The properties object.
 * @param {string} props.number - The number to display on the button.
 * @returns {JSX.Element} A button element displaying the number.
 */

import { useState } from 'react'

export default function Square() {
  //variabile che indica il valore di ogni quadrato
  const [value, setValue] = useState(null)

  function handleClick() {
    //funzione che cambia il valore di ogni quadrato
    setValue('X')
  }
  return (
    <button onClick={handleClick} className="square">
      {value}
    </button>
  )
}
