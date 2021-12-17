import React from 'react'

const Item = ( { elemento } ) => {
  console.log(elemento);
  return (
    <div>
      <h3>{elemento.name}</h3>
      <p>{elemento.rol}</p>
    </div>
  )
}

export default Item
