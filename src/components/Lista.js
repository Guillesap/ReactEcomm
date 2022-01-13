import { memo } from "react"
import Usuario from "./Usuario"

const Lista = ({usuarios,borrarUsuario}) => {

    console.log("Render Lista")

    return (
        <div>
           Soy Lista 
           {usuarios.map(usuario=>{
               return <Usuario key={usuario.id} borrarUsuario={borrarUsuario} usuario={usuario}/>
           })}
        </div>
    )
}

export default memo(Lista)