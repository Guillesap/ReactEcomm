import React from 'react'

const Item = ( { elemento } ) => {
  console.log(elemento);
  return (
    <div id="vHs">
      <h2>{elemento.nombre}</h2>
      <h3>{elemento.precio}</h3>
      <h2> <img src="/foto4scream.jpg" alt=""/></h2>
    </div>
  )
}

export default Item
