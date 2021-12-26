import React from 'react'

const Item = ( { elemento } ) => {
  console.log(elemento);

  return (
    <div id="vHs">
      <h2>{elemento.nombre}</h2>
      <h3>{elemento.precio}</h3>
      <h2> <img src="/foto0jigsaw.jpg" alt=""/></h2>
      <h4> Detalles: {elemento.detalle}</h4>
      <h5>Stock disponible: {elemento.stock}</h5>
      <h5><button>COMPRAR</button></h5>
    </div>
  )
}

export default Item
