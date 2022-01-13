import { memo } from "react"
import Usuario from "../Usuario"

const Lista = ({usuarios,borrarUsuario}) => {

    console.log("Render Lista")

    return (
        <div>
           <p>Ingrese Nombre y Apellido para finalizar</p>
           {usuarios.map(usuario=>{
               return <Usuario key={usuario.id} borrarUsuario={borrarUsuario} usuario={usuario}/>
           })}
           
        </div>
    )
}

export default memo(Lista)