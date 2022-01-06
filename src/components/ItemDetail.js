import ItemCount from "./ItemCount"

const ItemDetail  = ({item}) => {
    return (
    <article>
        <h1>Tu VHS seleccionado:</h1>
        <img src={item.img} alt={item.nombre} width={200} ></img>
        <p>Nombre: { item.nombre}</p>
        <p>Precio: ${item.precio}</p>
        <p>Detalle: {item.detalle}</p>
        <ItemCount stockProducto= {item.stock}  />
        <button>COMPRAR</button>
    </article>
    )
}

export default ItemDetail 