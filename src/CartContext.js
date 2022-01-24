import { createContext, useEffect, useState } from 'react'


export const contexto = createContext();

const { Provider } = contexto
    

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)


    const agregarProducto = (item, cantidad) => {
    setCantidad_total(cantidad_total + cantidad)
    setPrecio_total(precio_total + (item.precio * cantidad))
      if (isInCart(item.nombre)) {
        const indexActualizar = carrito.findIndex(element => element.item.nombre === item.nombre)
        carrito[indexActualizar].cantidad = carrito[indexActualizar].cantidad + cantidad
        console.log('El producto ya se encuentra en el carrito.');

    } else {
      console.log(`Agregaste ${item.nombre}, cantidad: ${cantidad}.`);
      const newObj = {
        item: item,
        cantidad
      }
      setCarrito([...carrito, newObj])
    }
  }


      const deleteItem = (nombre) => { 
        const updatedCart = carrito.filter(element => element.item.nombre !==nombre); setCarrito (updatedCart);
    }
    
    const limpiarCarrito = () => {
        setCarrito([])
     }

    const isInCart = (nombre) => {
        return carrito.some(element => element.item.nombre===nombre);
    }
    const productCounter = () => {
        return carrito.reduce((accum, product) => accum = accum + product.cantidad, 0)
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