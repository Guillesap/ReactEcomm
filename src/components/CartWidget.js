import React, { useContext } from 'react';
import { contexto } from '../CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {

  const { productCounter } = useContext(contexto)

  return (
    <>
    <span className="material-icons">shopping_cart
                    </span>
      <h2>{productCounter() > 0 && <Badge bg="danger">{productCounter()}</Badge>}</h2>
    </>
  )
}

export default CartWidget;
