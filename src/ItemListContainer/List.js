import React from 'react'
import Item from '../components/Item'

const List = () => {

  const obj = {
    nombre: 'Scream',
    precio: '$ 2500',
  }
 


  return (
    <div>
      <Item elemento={obj} />
    </div>
  )
}

export default List
