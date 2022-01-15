import { useContext } from "react";
import { contexto } from "../CartContext.js";
import { Link } from 'react-router-dom';
import Datos from "./Datos"
import CartItem from './CartItem';


const Cart = () => {

  const {carrito,deleteItem} = useContext (contexto)
 
  return (
    <div>
      {carrito.length === 0 &&
        <div>
          <h4>No hay películas en el carrito</h4>
          <Link to='/'><h2>Ir al inicio</h2></Link>
        </div>
      }
      <h3>Carrito de películas:</h3>
      {(carrito.length > 0) && carrito.map(prod=> <CartItem key={prod.item.id} item={prod} deleteItem={deleteItem} />)}
      <br></br>
      <h2>Finalizar Compra</h2>
      <br></br>
      <Datos/>
    </div>
    
   
  )
}


export default Cart