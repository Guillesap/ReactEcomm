import { createContext, useEffect, useState } from 'react'


export const contexto = createContext();

const { Provider } = contexto
    

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

    
    const agregarProducto = (producto,cantidad) => { 
        console.log (producto,cantidad)
        const newObj ={
            item: producto,
            cantidad: cantidad,
        }
        setCarrito([...carrito, newObj])
    } 
    console.log (carrito);

    const eliminarProducto = (id) => { 
        const updatedCart = carrito.filter(element => element.id !==id); setCarrito (updatedCart);
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
     }

    const isInCart = (id) => {
        return carrito.some(element => element.id ===id);
    }

  
    const valorDelContexto = { 
        carrito, 
        precio_total, 
        cantidad_total , 
        agregarProducto ,
        eliminarProducto , 
        limpiarCarrito
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartProvider