import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';


const CartItem = ({ item, deleteItem }) => {
  return (
    <Card body>
      <Container>
        <Row>
          <Col>
            {item.item.nombre}
          </Col>
          <Col>
            ${item.item.precio}
          </Col>
          <Col>
            Cantidad :{item.cantidad}
          </Col>
          <Col>
          <Button variant='danger' onClick={() => deleteItem(item.item.id)}>Eliminar</Button>
          </Col>
        </Row>
      </Container>
    </Card>
  )
}

export default CartItem;