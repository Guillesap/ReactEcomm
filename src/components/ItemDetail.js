import ItemCount from "./ItemCount"
import { Link } from 'react-router-dom';

const ItemDetail  = ({item, onAdd, added}) => {
    return (
    <article>
        <h1>Tu VHS/DVD:</h1>
        <img src={item.img} alt={item.nombre} width={200} ></img>
        <p>Nombre: { item.nombre}</p>
        <p>Precio: ${item.precio}</p>
        <p>Detalle: {item.detalle}</p>
        {added ? <Link to='/Cart'>IR AL CARRITO</Link> : <ItemCount stock={5} initial={1} onAdd={onAdd} /> }
    </article>
    )
}

export default ItemDetail 