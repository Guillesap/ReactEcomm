import { useCallback, useState } from "react"
import Lista from "./Lista"

const Datos = () => {

    const [nombre,setNombre] = useState("")
    const [apellido,setApellido] = useState("")
    const [usuarios,setUsuarios] = useState([])

    const handleChangeNombre = e => {
        setNombre(e.target.value)
    }

    const handleChangeApellido = e => {
        setApellido(e.target.value)
    }

    const agregarUsuario = () => {

        const usuario = {
            nombre,
            apellido,
            id : Math.random()
        }

        const copia = [...usuarios,usuario]
        setUsuarios(copia)
    }

    const borrarUsuario = (id) => {
        return setUsuarios(usuarios.filter(u => u.id !== id))
    }

    const borrarUsuarioMemorizada = useCallback(borrarUsuario,[usuarios])

    console.log("Render de App")

    return (
        <div>
            <input onChange={handleChangeNombre}/>
            <input onChange={handleChangeApellido}/>
            <button onClick={agregarUsuario}>Enviar Datos</button>
            <Lista usuarios= {usuarios} borrarUsuario= {borrarUsuarioMemorizada}/>
         
            
        </div>
    )
}

export default Datos