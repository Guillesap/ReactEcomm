import { useState } from "react"


const ItemCount = ({ stock , initial , onAdd }) => {
    
    const [contador, setContador] = useState(initial)
    
    const aumentarContador = () => {
        setContador(contador + 1)
    }

    const disminuirContador = () => {
        setContador(contador - 1)
    }

    const confirmarCantidad = () => {
        console.log(`Confirmando cantidad: ${contador}`)
        //onAdd(contador)
    }

    return (
        <div>
            <p>Contador: {contador}</p>
            <button onClick={aumentarContador}>AUMENTAR</button>
            <button onClick={confirmarCantidad}>OK</button>
            <button onClick={disminuirContador}>DISMINUIR</button>
        </div>
    )
}

export default ItemCount
