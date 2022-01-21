import Item from "./Item"

const ItemList = ({productos}) => {

    return (
        <section id="listado-productos">
            {productos.map(producto=>{
                return <Item key={producto.id} producto={producto}/>
            })}     
        </section>
    )
}

export default ItemList
