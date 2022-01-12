import { createContext, useState } from 'react'

export const contexto = createContext(/* {
    carrito : [],
    precio_total : 0,
    cantidad_total : 0
} */)

const { Provider } = contexto
//export { contexto }

//const Provider = contexto.Provider
//const Consumer = contexto.Consumer
//const { Provider, Consumer } = contexto
//contexto.Consumer : Te permitia consumir el contexto
//contexto.Provider : Te permitia proveer el contexto y modificarlo
//useContext() : Es un hook que te permite consumir el contexto

//console.log(contexto)

const CartProvider = ({ children }) => {

    const [carrito, setCarrito] = useState([])
    const [precio_total, setPrecio_total] = useState(0)
    const [cantidad_total, setCantidad_total] = useState(0)

    
    const agregarProducto = (producto,cantidad) => { 
        console.log (producto,cantidad)
    } 
    
    const eliminarProducto = (id) => { }
    
    const limpiarCarrito = () => {
        setCarrito([])
     }

    const isInCart = () => {}
    
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