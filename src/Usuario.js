import { memo } from "react"

const Usuario = ({usuario,borrarUsuario}) => {

    console.log("Render Usuario")

    const manejarClick = () => {
        borrarUsuario(usuario.id)
    }

    return (
        <div>
            <p>{usuario.nombre} {usuario.apellido}</p>
            <button onClick={manejarClick}>borrar</button>
        </div>
    )
}

export default memo(Usuario)