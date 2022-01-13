import { useContext, useState } from "react"
import ItemCount from "./ItemCount"
import { contexto } from "../CartContext"
import { useNavigate } from "react-router-dom";

const ItemDetail = ({item}) => {

    const { nombre, img, precio, detalle, stock} =item
    const [mostrar, setMostrar] = useState(true)
    const { agregarProducto } = useContext(contexto)
    const navigate = useNavigate()

    const verResultado = (cantidad) => {
        setMostrar(false)
        agregarProducto(item, cantidad)
        
    }

    const redirectToCart = () => {
        navigate("/cart")
    }

    return (
        <div id="CardDetail">
        <div className="detalle-producto">
            <h1>{nombre}</h1>
            <img className="detalle-imagen" src={img} width={300}/>
          <h2>Sinopsis:    {detalle}</h2>
          {mostrar ? <ItemCount producto={item} stock={item.stock} initial={1} onAdd={verResultado} /> : null}
          {!mostrar && <button onClick={redirectToCart}>Ir al carrito</button>}
        </div>
        </div>
    )
}

export default ItemDetail