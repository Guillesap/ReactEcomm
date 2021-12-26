import React from 'react'
import Item from '../components/Item'

const List = () => {

  const obj = {
    nombre: 'El Juego del miedo',
    precio: '$ 1800',
    detalle: 'Duración: 120 minutos, Año: 2002.',
    stock: '10'
  }

  return (
    <div>
      <Item elemento={obj} />
    </div>
  )
}

export default List
