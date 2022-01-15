import React, { useContext } from 'react';
import { contexto } from '../CartContext';
import { Badge } from 'react-bootstrap';

const CartWidget = () => {

  const { productCounter } = useContext(contexto)

  return (
    <>
    <span className="material-icons">shopping_cart
                    </span>
      {productCounter() > 0 && <Badge bg="secondary">{productCounter()}</Badge>}
    </>
  )
}

export default CartWidget;
