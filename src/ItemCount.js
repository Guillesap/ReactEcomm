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
            <p>Contador Actual : {contador}</p>
            <button onClick={aumentarContador}>SUBIR</button>
            <button onClick={confirmarCantidad}>CONFIRMAR</button>
            <button onClick={disminuirContador}>BAJAR</button>
        </div>
    )
}

export default ItemCount
