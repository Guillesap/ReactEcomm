import React, { useState } from 'react'

const contador = ( { stock, initial, onAdd } ) => {

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [ contador, setContador ] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1)
    }
  }
  
  const restar = () => {
    if (contador > initial) {
      setContador(contador - 1)
    }
  }

  return (
    <div id="cOntador">
        <h4>¿Cuantos Vhs?</h4>
      <button onClick={() => restar()} >-</button>
      <p>{contador}</p>
      <button onClick={() => sumar()} >+</button>
    </div>
  )
}

export default contador