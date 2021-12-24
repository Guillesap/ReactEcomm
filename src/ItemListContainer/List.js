import React from 'react'
import Item from '../components/Item'

const List = () => {

  const obj = {
    nombre: 'Scream',
    precio: '$ 2500',
    detalle: 'Duración: 120 minutos, Año: 1997.',
    stock: '10'
  }

  return (
    <div>
      <Item elemento={obj} />
    </div>
  )
}

export default List
