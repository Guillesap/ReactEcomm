import { useContext } from "react";
import { contexto } from "../CartContext.js";

const Cart = () => {

  const {carrito, cantidad_total} = useContext (contexto)
 
    return (
        <div>
            <h4>CARRITO DE COMPRAS</h4>
            <h3>Adquiriste el siguiente VHS:</h3>
            <p>Titulo: </p>
            <p>Cantidad Total :{cantidad_total}</p>
            <p>Precio:</p>
            <h5>Gracias por tu compra!</h5>
        </div>
    )
}

export default Cart
