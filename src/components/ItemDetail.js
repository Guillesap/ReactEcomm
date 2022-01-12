import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { contexto } from "../CartContext"

const ItemDetail = ({item}) => {

    const { nombre, img, precio, stock} =item
    const [mostrar, setMostrar] = useState(true)
    const { agregarProducto } = useContext(contexto)

    const verQueOnda = (cantidad) => {
        setMostrar(false)
        agregarProducto(item, cantidad)
    }

    if (mostrar) {
        return (
            <div id="CardDetail">
                <h3>{nombre}</h3>
                <img src={img} />
                <h3>$ {precio}</h3>
                <p>Stock: {stock}</p>
                <ItemCount initial={1} onAdd={verQueOnda} />

            </div>
        )
    } else {
        return (
            <div id="CardDetail">
                <h2>{nombre}</h2>
                <img src={img} />
                <p>$ {precio}</p>
            </div>
        )
    }
}

export default ItemDetail
