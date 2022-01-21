/* eslint-disable no-undef */
import { useContext, useState } from "react"
    import { toast } from "react-toastify"
import ItemCount from "./ItemCount"
import { contexto } from "../CartContext"
import { useNavigate } from "react-router-dom";

const ItemDetail = ({ producto}) => {

    const { nombre, detalle, precio,stock, img} = producto
    const [mostrar, setMostrar] = useState(true)
    const { agregarProducto } = useContext(contexto)
    const navigate = useNavigate()

    const verQueOnda = (cantidad) => {
        setMostrar(false)
        agregarProducto(producto, cantidad)
        toast.success(`Se agrego el producto al carrito!`)
    }

    const redirectToCart = () => {
        navigate("/cart")
    }

    return (
        <div id="dEtalle">
        <div className="detalle-producto">
            <h1>{nombre}</h1>
            <img className="detalle-imagen" src={img} />
            <h3>$ {precio}</h3>
            <h3> Sinoposis: {detalle}</h3>
            {mostrar ? <ItemCount producto={producto} stock={producto.stock} initial={1} onAdd={verQueOnda} /> : null}
            {!mostrar && <button onClick={redirectToCart}>Ir al carrito</button>}
        </div>
        </div>
    )
}

export default ItemDetail
