/* eslint-disable jsx-a11y/alt-text */


import ItemCount from "./ItemCount"

const ItemDetail  = ({item}) => {
    return (
        <div>
            <h3>Detalle de la pelicula seleccionada:</h3>
            <img src={item.foto}/>
            <p>Nombre:{item.nombre}</p>
            <p>Precio:$ {item.precio}</p>
            <p>Detalle:{item.info}</p>
            <p>Stock: {item.stock}</p>

            <ItemCount stock= {item.stock} initial={0}/>

        </div>
    )
}

export default ItemDetail 

