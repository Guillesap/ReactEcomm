import { useContext } from "react";
import { contexto } from "../CartContext.js";
import Datos from "./Datos"
import ItemCount from "./ItemCount.js";

const Cart = () => {

  const {carrito} = useContext (contexto)
 
    return (
        <div>
            <h4>Tu título seleccionado:</h4>
            {carrito.map(item => 
            <h3>{item.item.nombre}</h3>
            )}
            <h5>Finalizar compra</h5>
            <Datos/> <h3>Gracias por tu compra</h3>
        </div>
    )
}

export default Cart