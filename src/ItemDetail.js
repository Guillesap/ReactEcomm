/* eslint-disable jsx-a11y/alt-text */


import ItemCount from "./ItemCount"

const ItemDetail  = ({item}) => {
    return (
        <section id="dEtail">
            <h3>Detalle de la pelicula seleccionada:</h3>
            <img src={item.foto}/>
            <h1>Título:{item.nombre}</h1>
            <h2>Precio:$ {item.precio}</h2>
            <h3>Detalle:{item.info}</h3>
            <h4>Stock: {item.stock}</h4>
            <ItemCount stock= {item.stock} initial={0}/>
            <button>COMPRAR</button>

        </section>
    )
}

export default ItemDetail 

