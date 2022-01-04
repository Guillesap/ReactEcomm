import Item from "./Item"

const ItemList = ({lista}) => {

    return (
        <section id="listado-productos">
            {lista.map(producto=>{
                return <Item producto={producto}/>
            })}     
        </section>
    )
}

export default ItemList
