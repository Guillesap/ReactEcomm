import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';


const ItemDetail  = ({item, onAdd, added}) => {
    return (
    <div id="CardDetail">
    <Card style={{ width: '20rem' }}>
    <Card.Img variant="top" src= {item.img} alt={item.nombre} width={200} />
    <Card.Body>
      <Card.Title>{ item.nombre}</Card.Title>
      <Card.Text>
      <p>Precio: ${item.precio}</p>
    <p>Detalle: {item.detalle}</p>
      </Card.Text>
      {added ? <Link to='/Cart'><h3>IR AL CARRITO</h3></Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }
    </Card.Body>
  </Card>
  </div>

    )
}


export default ItemDetail 