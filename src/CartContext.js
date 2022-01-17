import { createContext, useEffect, useState } from 'react'


export const contexto = createContext();

const { Provider } = contexto
    

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)


    const agregarProducto = (product, cantidad) => {
        if (isInCart(product.id)) {
          console.log('La pelicula está en el carrito');
        } else {
          console.log(`Agregaste ${product.nombre}, cantidad: ${cantidad}.`);
          const newObj = {
            item: product,
            cantidad
          }
          setCarrito([...carrito, newObj])
        }
      }


      const deleteItem = (id) => { 
        const updatedCart = carrito.filter(item => item.item.id !==id); setCarrito (updatedCart);
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
     }

    const isInCart = (id) => {
        return carrito.some(element => element.item.id===id);
    }
    const productCounter = () => {
        return carrito.reduce((accum, item) => accum = accum + item.cantidad, 0)
      }
  
    const valorDelContexto = { 
        carrito, 
        precio_total, 
        cantidad_total , 
        agregarProducto ,
        deleteItem , 
        isInCart,
        limpiarCarrito,
        productCounter
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CartProvider